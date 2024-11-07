// acceptio/src/app/profile/page.tsx

"use client";

import React, { useState } from "react";
import styles from "./Profile.module.css";
import Button from "../../src/components/Button/Button";
import ProtectedRoute from "../../src/components/ProtectedRoute";
import { useAuth } from "../../src/context/AuthContext";

// Import predefined options
import {
  EXTRACURRICULARS,
  TEST_TYPES,
  SAT_SUBJECTS,
  IELTS_SECTIONS,
  HOBBIES,
  SPORTS,
  OLYMPIADS,
  HACKATHONS,
  COMPETITIONS,
  SAT_MATH_SCORES,
  SAT_VERBAL_SCORES,
  SAT_SUBJECT_TEST_SCORES,
  IELTS_SCORES,
  ACT_SCORES,
  TOEFL_SCORES,
  GRE_SCORES,
  GMAT_SCORES,
  // Add other score arrays as needed
} from "../../data/options";

interface Hobby {
  id: number;
  hobby: string;
}

interface TestScore {
  id: number;
  testType: string;
  details: any; // Can be SAT, SAT Subject Test, IELTS, etc.
}

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();

  // State for Extracurriculars
  const [extracurriculars, setExtracurriculars] = useState(user?.extracurriculars || []);
  const [selectedExtracurriculars, setSelectedExtracurriculars] = useState<string[]>([]);

  // State for Test Scores
  const [testScores, setTestScores] = useState<TestScore[]>(user?.testScores || []);
  const [selectedTestType, setSelectedTestType] = useState<string>("");

  // Temporary state for adding a test score
  const [tempTestScore, setTempTestScore] = useState<any>({});

  // State for Hobbies
  const [hobbies, setHobbies] = useState<Hobby[]>(user?.hobbies || []);
  const [selectedHobby, setSelectedHobby] = useState<string>("");

  // Status Message
  const [statusMessage, setStatusMessage] = useState<string>("");

  // Error States
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Function to handle selecting extracurriculars
  const handleSelectExtracurricular = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selected: string[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setSelectedExtracurriculars(selected);
  };

  // Function to add selected extracurriculars
  const handleAddExtracurriculars = () => {
    const newEntries = selectedExtracurriculars.map((activity, index) => ({
      id: extracurriculars.length + index + 1,
      activity,
      category: categorizeExtracurricular(activity),
    }));
    setExtracurriculars([...extracurriculars, ...newEntries]);
    setSelectedExtracurriculars([]);
    setStatusMessage("");
  };

  // Helper function to categorize extracurriculars
  const categorizeExtracurricular = (activity: string): string => {
    if (EXTRACURRICULARS.includes(activity)) {
      // Determine category based on activity
      if (SPORTS.includes(activity)) return "Sports";
      if (OLYMPIADS.includes(activity)) return "Olympiads";
      if (HACKATHONS.includes(activity)) return "Hackathons";
      if (COMPETITIONS.includes(activity)) return "Competitions";
    }
    return "Other";
  };

  // Function to handle selecting test type
  const handleSelectTestType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTestType(e.target.value);
    setTempTestScore({});
    setErrors({});
  };

  // Function to handle input changes for test scores
  const handleTestScoreChange = (field: string, value: string) => {
    setTempTestScore({
      ...tempTestScore,
      [field]: value,
    });

    // Clear the error for the specific field upon change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  // Validation Function
  const validateTestScore = (): boolean => {
    let valid = true;
    const newErrors: { [key: string]: string } = {};

    switch (selectedTestType) {
      case "SAT":
        // Validate Math Score
        if (!tempTestScore.math) {
          newErrors.math = "Math score is required.";
          valid = false;
        } else if (
          tempTestScore.math !== "TBA" &&
          !SAT_MATH_SCORES.includes(parseInt(tempTestScore.math))
        ) {
          newErrors.math = "Invalid Math score.";
          valid = false;
        }

        // Validate Verbal Score
        if (!tempTestScore.verbal) {
          newErrors.verbal = "Verbal score is required.";
          valid = false;
        } else if (
          tempTestScore.verbal !== "TBA" &&
          !SAT_VERBAL_SCORES.includes(parseInt(tempTestScore.verbal))
        ) {
          newErrors.verbal = "Invalid Verbal score.";
          valid = false;
        }

        break;

      case "SAT Subject Test":
        // Validate Subject
        if (!tempTestScore.subject) {
          newErrors.subject = "Subject is required.";
          valid = false;
        }

        // Validate Score
        if (!tempTestScore.score) {
          newErrors.score = "Score is required.";
          valid = false;
        } else if (
          tempTestScore.score !== "TBA" &&
          !SAT_SUBJECT_TEST_SCORES.includes(parseInt(tempTestScore.score))
        ) {
          newErrors.score = "Invalid Subject Test score.";
          valid = false;
        }

        break;

      case "IELTS":
        IELTS_SECTIONS.forEach((section) => {
          const score = tempTestScore[section.toLowerCase()];
          if (!score) {
            newErrors[section.toLowerCase()] = `${section} score is required.`;
            valid = false;
          } else if (
            score !== "TBA" &&
            !IELTS_SCORES.includes(parseFloat(score))
          ) {
            newErrors[section.toLowerCase()] = `Invalid ${section} score.`;
            valid = false;
          }
        });
        break;

      case "ACT":
        // ACT has multiple sections: English, Math, Reading, Science
        ["english", "math", "reading", "science"].forEach((section) => {
          const score = tempTestScore[section];
          if (!score) {
            newErrors[section] = `${capitalizeFirstLetter(section)} score is required.`;
            valid = false;
          } else if (
            score !== "TBA" &&
            !ACT_SCORES.includes(parseInt(score))
          ) {
            newErrors[section] = `Invalid ${capitalizeFirstLetter(section)} score.`;
            valid = false;
          }
        });
        break;

      // Add similar validation cases for other test types like TOEFL, GRE, etc.

      default:
        // For test types that have a single score
        if (!tempTestScore.score) {
          newErrors.score = "Score is required.";
          valid = false;
        } else if (
          tempTestScore.score !== "TBA" &&
          !getAllowedScores(selectedTestType).includes(parseInt(tempTestScore.score))
        ) {
          newErrors.score = "Invalid score.";
          valid = false;
        }
        break;
    }

    setErrors(newErrors);
    return valid;
  };

  // Helper function to capitalize first letter
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Helper function to get allowed scores based on test type
  const getAllowedScores = (testType: string): number[] => {
    switch (testType) {
      case "TOEFL":
        return TOEFL_SCORES;
      case "GRE":
        return [...GRE_SCORES.verbal, ...GRE_SCORES.quantitative];
      case "GMAT":
        return [...GMAT_SCORES.verbal, ...GMAT_SCORES.quantitative];
      // Add cases for other test types as needed
      default:
        return [];
    }
  };

  // Function to add a test score
  const handleAddTestScore = () => {
    if (!selectedTestType) {
      alert("Please select a test type.");
      return;
    }

    if (!validateTestScore()) {
      // Validation failed
      return;
    }

    // Prepare the details object based on test type
    let details: any = {};

    switch (selectedTestType) {
      case "SAT":
        details.math = tempTestScore.math;
        details.verbal = tempTestScore.verbal;
        if (tempTestScore.math !== "TBA" && tempTestScore.verbal !== "TBA") {
          details.total = (parseInt(tempTestScore.math) + parseInt(tempTestScore.verbal)).toString();
        } else {
          details.total = "TBA";
        }
        break;

      case "SAT Subject Test":
        details.subject = tempTestScore.subject;
        details.score = tempTestScore.score;
        break;

      case "IELTS":
        details.listening = tempTestScore.listening;
        details.reading = tempTestScore.reading;
        details.writing = tempTestScore.writing;
        details.speaking = tempTestScore.speaking;
        if (
          tempTestScore.listening !== "TBA" &&
          tempTestScore.reading !== "TBA" &&
          tempTestScore.writing !== "TBA" &&
          tempTestScore.speaking !== "TBA"
        ) {
          const finalScore = (
            (parseFloat(tempTestScore.listening) +
              parseFloat(tempTestScore.reading) +
              parseFloat(tempTestScore.writing) +
              parseFloat(tempTestScore.speaking)) /
            4
          ).toFixed(1);
          details.final = finalScore;
        } else {
          details.final = "TBA";
        }
        break;

      case "ACT":
        details.english = tempTestScore.english;
        details.math = tempTestScore.math;
        details.reading = tempTestScore.reading;
        details.science = tempTestScore.science;
        if (
          tempTestScore.english !== "TBA" &&
          tempTestScore.math !== "TBA" &&
          tempTestScore.reading !== "TBA" &&
          tempTestScore.science !== "TBA"
        ) {
          details.composite = calculateACTComposite(details);
        } else {
          details.composite = "TBA";
        }
        break;

      // Add cases for other test types as needed

      default:
        // For test types that have a single score
        details.score = tempTestScore.score;
        break;
    }

    // Add the new test score
    setTestScores([
      ...testScores,
      {
        id: testScores.length + 1,
        testType: selectedTestType,
        details,
      },
    ]);

    // Reset temporary state
    setSelectedTestType("");
    setTempTestScore({});
    setErrors({});
    setStatusMessage("");
  };

  // Function to handle deleting a test score
  const handleDeleteTestScore = (id: number) => {
    const updated = testScores.filter((item) => item.id !== id);
    setTestScores(updated);
    setStatusMessage("");
  };

  // Function to handle deleting an extracurricular
  const handleDeleteExtracurricular = (id: number) => {
    const updated = extracurriculars.filter((item) => item.id !== id);
    setExtracurriculars(updated);
    setStatusMessage("");
  };

  // Function to handle selecting a hobby
  const handleSelectHobby = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHobby(e.target.value);
  };

  // Function to add a hobby
  const handleAddHobby = () => {
    if (!selectedHobby) return;
    const newEntry = {
      id: hobbies.length + 1,
      hobby: selectedHobby,
    };
    setHobbies([...hobbies, newEntry]);
    setSelectedHobby("");
    setStatusMessage("");
  };

  // Function to handle deleting a hobby
  const handleDeleteHobby = (id: number) => {
    const updated = hobbies.filter((item) => item.id !== id);
    setHobbies(updated);
    setStatusMessage("");
  };

  // Function to handle form submission
  const handleSubmitProfile = (e: React.FormEvent) => {
    e.preventDefault();

    // Ensure there are no validation errors before saving
    if (Object.keys(errors).length > 0) {
      alert("Please fix the errors before saving your profile.");
      return;
    }

    // Update user data in context
    const updatedUser = {
      ...user!,
      extracurriculars,
      testScores,
      hobbies,
    };

    // Update the user in context
    updateUser(updatedUser);

    // Display success message
    setStatusMessage("Profile updated successfully!");
  };

  return (
    <ProtectedRoute>
      <div className={styles.profileContainer}>
        <section className={styles.profileSection}>
          <h1 className={styles.sectionTitle}>Complete Your Profile</h1>
          {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
          <form onSubmit={handleSubmitProfile} className={styles.profileForm}>
            {/* Extracurriculars */}
            <div className={styles.formGroup}>
              <label htmlFor="extracurriculars">Extracurriculars</label>
              <div className={styles.inputRow}>
                <select
                  id="extracurriculars"
                  multiple
                  value={selectedExtracurriculars}
                  onChange={handleSelectExtracurricular}
                  className={styles.multiSelect}
                >
                  {EXTRACURRICULARS.map((activity) => (
                    <option key={activity} value={activity}>
                      {activity}
                    </option>
                  ))}
                </select>
                <Button
                  type="button"
                  text="Add"
                  onClick={handleAddExtracurriculars}
                  className={styles.button}
                />
              </div>
              <ul className={styles.list}>
                {extracurriculars.map((item) => (
                  <li key={item.id} className={styles.listItem}>
                    <span>
                      {item.category}: {item.activity}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteExtracurricular(item.id)}
                      className={styles.deleteButton}
                      aria-label={`Delete ${item.activity}`}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Test Scores */}
            <div className={styles.formGroup}>
              <label htmlFor="testType">Test Scores</label>
              <div className={styles.inputRow}>
                <select
                  id="testType"
                  value={selectedTestType}
                  onChange={handleSelectTestType}
                  className={styles.select}
                >
                  <option value="">Select Test Type</option>
                  {TEST_TYPES.map((test) => (
                    <option key={test} value={test}>
                      {test}
                    </option>
                  ))}
                </select>
              </div>

              {/* Render input fields based on selected test type */}
              {selectedTestType && (
                <div className={styles.testScoreInputs}>
                  {selectedTestType === "SAT" && (
                    <div className={styles.testTypeGroup}>
                      <div className={styles.inputField}>
                        <label htmlFor="math">Math Score</label>
                        <input
                          type="number"
                          id="math"
                          value={tempTestScore.math || ""}
                          onChange={(e) => handleTestScoreChange("math", e.target.value)}
                          placeholder="Enter Math Score"
                          min="200"
                          max="800"
                        />
                        {errors.math && <span className={styles.error}>{errors.math}</span>}
                      </div>
                      <div className={styles.inputField}>
                        <label htmlFor="verbal">Verbal Score</label>
                        <input
                          type="number"
                          id="verbal"
                          value={tempTestScore.verbal || ""}
                          onChange={(e) => handleTestScoreChange("verbal", e.target.value)}
                          placeholder="Enter Verbal Score"
                          min="200"
                          max="800"
                        />
                        {errors.verbal && <span className={styles.error}>{errors.verbal}</span>}
                      </div>
                    </div>
                  )}

                  {selectedTestType === "SAT Subject Test" && (
                    <div className={styles.testTypeGroup}>
                      <div className={styles.inputField}>
                        <label htmlFor="subject">Subject</label>
                        <select
                          id="subject"
                          value={tempTestScore.subject || ""}
                          onChange={(e) => handleTestScoreChange("subject", e.target.value)}
                          className={styles.select}
                        >
                          <option value="">Select Subject</option>
                          {SAT_SUBJECTS.map((subject) => (
                            <option key={subject} value={subject}>
                              {subject}
                            </option>
                          ))}
                        </select>
                        {errors.subject && <span className={styles.error}>{errors.subject}</span>}
                      </div>
                      <div className={styles.inputField}>
                        <label htmlFor="score">Score</label>
                        <input
                          type="number"
                          id="score"
                          value={tempTestScore.score || ""}
                          onChange={(e) => handleTestScoreChange("score", e.target.value)}
                          placeholder="Enter Score"
                          min="200"
                          max="800"
                        />
                        {errors.score && <span className={styles.error}>{errors.score}</span>}
                      </div>
                    </div>
                  )}

                  {selectedTestType === "IELTS" && (
                    <div className={styles.testTypeGroup}>
                      {IELTS_SECTIONS.map((section) => (
                        <div key={section} className={styles.inputField}>
                          <label htmlFor={`${section.toLowerCase()}Score`}>{section} Score</label>
                          <input
                            type="number"
                            id={`${section.toLowerCase()}Score`}
                            value={tempTestScore[section.toLowerCase()] || ""}
                            onChange={(e) => handleTestScoreChange(section.toLowerCase(), e.target.value)}
                            placeholder={`Enter ${section} Score`}
                            step="0.5"
                            min="0.0"
                            max="9.0"
                          />
                          {errors[section.toLowerCase()] && (
                            <span className={styles.error}>{errors[section.toLowerCase()]}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {selectedTestType === "ACT" && (
                    <div className={styles.testTypeGroup}>
                      {["english", "math", "reading", "science"].map((section) => (
                        <div key={section} className={styles.inputField}>
                          <label htmlFor={`${section}Score`}>{capitalizeFirstLetter(section)} Score</label>
                          <input
                            type="number"
                            id={`${section}Score`}
                            value={tempTestScore[section] || ""}
                            onChange={(e) => handleTestScoreChange(section, e.target.value)}
                            placeholder={`Enter ${capitalizeFirstLetter(section)} Score`}
                            min="1"
                            max="36"
                          />
                          {errors[section] && <span className={styles.error}>{errors[section]}</span>}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add similar input groups for other test types like TOEFL, GRE, GMAT, etc. */}
                </div>
              )}

              {/* Add Button */}
              {selectedTestType && (
                <div className={styles.inputRow}>
                  <Button
                    type="button"
                    text="Add"
                    onClick={handleAddTestScore}
                    className={styles.button}
                  />
                </div>
              )}

              {/* Display Added Test Scores */}
              <ul className={styles.list}>
                {testScores.map((item) => (
                  <li key={item.id} className={styles.listItem}>
                    <span>
                      {item.testType}:{" "}
                      {item.testType === "SAT" && item.details ? (
                        <>
                          Math: {item.details.math}, Verbal: {item.details.verbal}, Total: {item.details.total}
                        </>
                      ) : item.testType === "SAT Subject Test" && item.details ? (
                        <>
                          {item.details.subject}: {item.details.score}
                        </>
                      ) : item.testType === "IELTS" && item.details ? (
                        <>
                          Listening: {item.details.listening}, Reading: {item.details.reading}, Writing: {item.details.writing}, Speaking: {item.details.speaking}, Final: {item.details.final}
                        </>
                      ) : item.testType === "ACT" && item.details ? (
                        <>
                          English: {item.details.english}, Math: {item.details.math}, Reading: {item.details.reading}, Science: {item.details.science}, Composite: {item.details.composite}
                        </>
                      ) : (
                        <>
                          Score: {item.details?.score || "To be Announced"}
                        </>
                      )}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteTestScore(item.id)}
                      className={styles.deleteButton}
                      aria-label={`Delete ${item.testType} score`}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hobbies */}
            <div className={styles.formGroup}>
              <label htmlFor="hobbies">Hobbies</label>
              <div className={styles.inputRow}>
                <select
                  id="hobbies"
                  value={selectedHobby}
                  onChange={handleSelectHobby}
                  className={styles.select}
                >
                  <option value="">Select Hobby</option>
                  {HOBBIES.map((hobby) => (
                    <option key={hobby} value={hobby}>
                      {hobby}
                    </option>
                  ))}
                </select>
                <Button
                  type="button"
                  text="Add"
                  onClick={handleAddHobby}
                  className={styles.button}
                />
              </div>
              <ul className={styles.list}>
                {hobbies.map((item) => (
                  <li key={item.id} className={styles.listItem}>
                    <span>{item.hobby}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteHobby(item.id)}
                      className={styles.deleteButton}
                      aria-label={`Delete hobby ${item.hobby}`}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              text="Save Profile"
              className={styles.button}
            />
          </form>
        </section>
      </div>
    </ProtectedRoute>
  );
};

// Helper function to calculate ACT Composite Score
const calculateACTComposite = (details: any): string => {
  const { english, math, reading, science } = details;
  if (
    english === "TBA" ||
    math === "TBA" ||
    reading === "TBA" ||
    science === "TBA"
  ) {
    return "TBA";
  }
  const composite = Math.round((parseInt(english) + parseInt(math) + parseInt(reading) + parseInt(science)) / 4);
  return composite.toString();
};

// Helper function to capitalize first letter
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Profile;
