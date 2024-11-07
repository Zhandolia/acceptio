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
  };

  // Function to handle input changes for test scores
  const handleTestScoreChange = (field: string, value: string) => {
    setTempTestScore({
      ...tempTestScore,
      [field]: value,
    });
  };

  // Function to add a test score
  const handleAddTestScore = () => {
    if (!selectedTestType) {
      alert("Please select a test type.");
      return;
    }

    // Validate based on test type
    switch (selectedTestType) {
      case "SAT":
        if (!tempTestScore.math || !tempTestScore.verbal) {
          alert("Please select both Math and Verbal scores for SAT.");
          return;
        }
        setTestScores([
          ...testScores,
          {
            id: testScores.length + 1,
            testType: "SAT",
            details: {
              math: tempTestScore.math,
              verbal: tempTestScore.verbal,
              total: (parseInt(tempTestScore.math) + parseInt(tempTestScore.verbal)).toString(),
            },
          },
        ]);
        break;

      case "SAT Subject Test":
        if (!tempTestScore.subject || !tempTestScore.score) {
          alert("Please select both Subject and Score for SAT Subject Test.");
          return;
        }
        setTestScores([
          ...testScores,
          {
            id: testScores.length + 1,
            testType: "SAT Subject Test",
            details: {
              subject: tempTestScore.subject,
              score: tempTestScore.score,
            },
          },
        ]);
        break;

      case "IELTS":
        if (
          !tempTestScore.listening ||
          !tempTestScore.reading ||
          !tempTestScore.writing ||
          !tempTestScore.speaking
        ) {
          alert("Please select all four section scores for IELTS.");
          return;
        }
        const finalScore = (
          (parseFloat(tempTestScore.listening) +
            parseFloat(tempTestScore.reading) +
            parseFloat(tempTestScore.writing) +
            parseFloat(tempTestScore.speaking)) /
          4
        ).toFixed(1);
        setTestScores([
          ...testScores,
          {
            id: testScores.length + 1,
            testType: "IELTS",
            details: {
              listening: tempTestScore.listening,
              reading: tempTestScore.reading,
              writing: tempTestScore.writing,
              speaking: tempTestScore.speaking,
              final: finalScore,
            },
          },
        ]);
        break;

      // Add cases for other test types as needed

      default:
        setTestScores([
          ...testScores,
          {
            id: testScores.length + 1,
            testType: selectedTestType,
            details: {
              score: tempTestScore.score || "To be announced",
            },
          },
        ]);
        break;
    }

    // Reset temporary state
    setSelectedTestType("");
    setTempTestScore({});
    setStatusMessage("");
  };

  // Function to handle deleting a test score
  const handleDeleteTestScore = (id: number) => {
    const updated = testScores.filter((item) => item.id !== id);
    setTestScores(updated);
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
              <label>Extracurriculars</label>
              <div className={styles.inputRow}>
                <select
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
              <label>Test Scores</label>
              <div className={styles.inputRow}>
                <select
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
                {selectedTestType === "SAT" && (
                  <div className={styles.subForm}>
                    <select
                      value={tempTestScore.math || ""}
                      onChange={(e) => handleTestScoreChange("math", e.target.value)}
                      className={styles.select}
                    >
                      <option value="">Select Math Score</option>
                      {SAT_MATH_SCORES.map((score) => (
                        <option key={score} value={score}>
                          {score}
                        </option>
                      ))}
                      <option value="TBA">To be Announced</option>
                    </select>
                    <select
                      value={tempTestScore.verbal || ""}
                      onChange={(e) => handleTestScoreChange("verbal", e.target.value)}
                      className={styles.select}
                    >
                      <option value="">Select Verbal Score</option>
                      {SAT_VERBAL_SCORES.map((score) => (
                        <option key={score} value={score}>
                          {score}
                        </option>
                      ))}
                      <option value="TBA">To be Announced</option>
                    </select>
                  </div>
                )}

                {selectedTestType === "SAT Subject Test" && (
                  <div className={styles.subForm}>
                    <select
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
                    <select
                      value={tempTestScore.score || ""}
                      onChange={(e) => handleTestScoreChange("score", e.target.value)}
                      className={styles.select}
                    >
                      <option value="">Select Score</option>
                      {SAT_SUBJECT_TEST_SCORES.map((score) => (
                        <option key={score} value={score}>
                          {score}
                        </option>
                      ))}
                      <option value="TBA">To be Announced</option>
                    </select>
                  </div>
                )}

                {selectedTestType === "IELTS" && (
                  <div className={styles.subForm}>
                    {IELTS_SECTIONS.map((section) => (
                      <select
                        key={section}
                        value={tempTestScore[section.toLowerCase()] || ""}
                        onChange={(e) => handleTestScoreChange(section.toLowerCase(), e.target.value)}
                        placeholder={`${section} Score`}
                        className={styles.select}
                      >
                        <option value="">Select {section} Score</option>
                        {IELTS_SCORES.map((score) => (
                          <option key={score} value={score}>
                            {score}
                          </option>
                        ))}
                        <option value="TBA">To be Announced</option>
                      </select>
                    ))}
                  </div>
                )}

                {/* Repeat similar blocks for other test types like ACT, TOEFL, etc. */}
                {selectedTestType === "ACT" && (
                  <div className={styles.subForm}>
                    <select
                      value={tempTestScore.english || ""}
                      onChange={(e) => handleTestScoreChange("english", e.target.value)}
                      className={styles.select}
                    >
                      <option value="">Select English Score</option>
                      {ACT_SCORES.map((score) => (
                        <option key={score} value={score}>
                          {score}
                        </option>
                      ))}
                      <option value="TBA">To be Announced</option>
                    </select>
                    <select
                      value={tempTestScore.math || ""}
                      onChange={(e) => handleTestScoreChange("math", e.target.value)}
                      className={styles.select}
                    >
                      <option value="">Select Math Score</option>
                      {ACT_SCORES.map((score) => (
                        <option key={score} value={score}>
                          {score}
                        </option>
                      ))}
                      <option value="TBA">To be Announced</option>
                    </select>
                    <select
                      value={tempTestScore.reading || ""}
                      onChange={(e) => handleTestScoreChange("reading", e.target.value)}
                      className={styles.select}
                    >
                      <option value="">Select Reading Score</option>
                      {ACT_SCORES.map((score) => (
                        <option key={score} value={score}>
                          {score}
                        </option>
                      ))}
                      <option value="TBA">To be Announced</option>
                    </select>
                    <select
                      value={tempTestScore.science || ""}
                      onChange={(e) => handleTestScoreChange("science", e.target.value)}
                      className={styles.select}
                    >
                      <option value="">Select Science Score</option>
                      {ACT_SCORES.map((score) => (
                        <option key={score} value={score}>
                          {score}
                        </option>
                      ))}
                      <option value="TBA">To be Announced</option>
                    </select>
                  </div>
                )}

                {/* Add similar subForms for other test types like GRE, GMAT, etc. */}

                <Button
                  type="button"
                  text="Add"
                  onClick={handleAddTestScore}
                  className={styles.button}
                />
              </div>
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
                          English: {item.details.english}, Math: {item.details.math}, Reading: {item.details.reading}, Science: {item.details.science}, Composite: {calculateACTComposite(item.details)}
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
              <label>Hobbies</label>
              <div className={styles.inputRow}>
                <select
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
  const composite = Math.round((parseInt(english) + parseInt(math) + parseInt(reading) + parseInt(science)) / 4);
  return composite.toString();
};

export default Profile;
