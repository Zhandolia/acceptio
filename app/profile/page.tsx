// acceptio/src/app/profile/page.tsx

"use client";

import React, { useState } from "react";
import styles from "./Profile.module.css";
import Button from "../../src/components/Button/Button";
import ProtectedRoute from "../../src/components/ProtectedRoute";
import { useAuth } from "../../src/context/AuthContext";

// Import predefined options
import {
  SPORTS,
  OLYMPIADS,
  HACKATHONS,
  COMPETITIONS,
  TEST_TYPES,
  MUSIC_INSTRUMENTS,
  HOBBIES,
} from "../../data/options";

interface Hobby {
  id: number;
  hobby: string;
}

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();

  // State for Extracurriculars
  const [extracurriculars, setExtracurriculars] = useState(user?.extracurriculars || []);
  const [selectedExtracurricularCategory, setSelectedExtracurricularCategory] = useState<string>("Sports");
  const [selectedExtracurricularActivity, setSelectedExtracurricularActivity] = useState<string>("");

  // State for Test Scores
  const [testScores, setTestScores] = useState(user?.testScores || []);
  const [selectedTestType, setSelectedTestType] = useState<string>("SAT");
  const [testScore, setTestScore] = useState<string>("");

  // State for Music Hobbies
  const [musicHobbies, setMusicHobbies] = useState(user?.musicHobbies || []);
  const [selectedInstrument, setSelectedInstrument] = useState<string>("Piano");
  const [yearsOfExp, setYearsOfExp] = useState<number>(1);
  const [musicLevel, setMusicLevel] = useState<string>("Beginner");

  // State for Other Hobbies
  const [hobbies, setHobbies] = useState<Hobby[]>(user?.hobbies || []);
  const [selectedHobby, setSelectedHobby] = useState<string>("Photography");

  // Status Message
  const [statusMessage, setStatusMessage] = useState<string>("");

  // Function to handle adding extracurriculars
  const handleAddExtracurricular = () => {
    if (selectedExtracurricularActivity === "") return;
    const newEntry = {
      id: extracurriculars.length + 1,
      activity: selectedExtracurricularActivity,
      category: selectedExtracurricularCategory,
    };
    setExtracurriculars([...extracurriculars, newEntry]);
    setSelectedExtracurricularActivity("");
    setStatusMessage("");
  };

  // Function to handle adding test scores
  const handleAddTestScore = () => {
    if (testScore === "") return;
    const newEntry = {
      id: testScores.length + 1,
      testType: selectedTestType,
      score: testScore,
    };
    setTestScores([...testScores, newEntry]);
    setTestScore("");
    setStatusMessage("");
  };

  // Function to handle adding music hobbies
  const handleAddMusicHobby = () => {
    if (selectedInstrument === "" || musicLevel === "" || yearsOfExp <= 0) return;
    const newEntry = {
      id: musicHobbies.length + 1,
      instrument: selectedInstrument,
      yearsOfExp,
      level: musicLevel,
    };
    setMusicHobbies([...musicHobbies, newEntry]);
    setSelectedInstrument("Piano");
    setYearsOfExp(1);
    setMusicLevel("Beginner");
    setStatusMessage("");
  };

  // Function to handle adding other hobbies
  const handleAddHobby = () => {
    if (selectedHobby === "") return;
    const newEntry = {
      id: hobbies.length + 1,
      hobby: selectedHobby,
    };
    setHobbies([...hobbies, newEntry]);
    setSelectedHobby("Photography");
    setStatusMessage("");
  };

  // Function to handle form submission
  const handleSubmitProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    // Update user data in context
    const updatedUser = {
      ...user!,
      extracurriculars,
      testScores,
      musicHobbies,
      hobbies,
    };

    // Update the user in context
    updateUser(updatedUser);

    // Display success message
    setStatusMessage("Profile updated successfully!");
  };

  // Function to handle deleting an extracurricular
  const handleDeleteExtracurricular = (id: number) => {
    const updated = extracurriculars.filter((item) => item.id !== id);
    setExtracurriculars(updated);
    setStatusMessage("");
  };

  // Function to handle deleting a test score
  const handleDeleteTestScore = (id: number) => {
    const updated = testScores.filter((item) => item.id !== id);
    setTestScores(updated);
    setStatusMessage("");
  };

  // Function to handle deleting a music hobby
  const handleDeleteMusicHobby = (id: number) => {
    const updated = musicHobbies.filter((item) => item.id !== id);
    setMusicHobbies(updated);
    setStatusMessage("");
  };

  // Function to handle deleting a hobby
  const handleDeleteHobby = (id: number) => {
    const updated = hobbies.filter((item) => item.id !== id);
    setHobbies(updated);
    setStatusMessage("");
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
                  value={selectedExtracurricularCategory}
                  onChange={(e) => setSelectedExtracurricularCategory(e.target.value)}
                >
                  <option value="Sports">Sports</option>
                  <option value="Olympiads">Olympiads</option>
                  <option value="Hackathons">Hackathons</option>
                  <option value="Competitions">Competitions</option>
                </select>
                <select
                  value={selectedExtracurricularActivity}
                  onChange={(e) => setSelectedExtracurricularActivity(e.target.value)}
                >
                  <option value="">Select Activity</option>
                  {selectedExtracurricularCategory === "Sports" &&
                    SPORTS.map((sport) => (
                      <option key={sport} value={sport}>
                        {sport}
                      </option>
                    ))}
                  {selectedExtracurricularCategory === "Olympiads" &&
                    OLYMPIADS.map((olympiad) => (
                      <option key={olympiad} value={olympiad}>
                        {olympiad}
                      </option>
                    ))}
                  {selectedExtracurricularCategory === "Hackathons" &&
                    HACKATHONS.map((hackathon) => (
                      <option key={hackathon} value={hackathon}>
                        {hackathon}
                      </option>
                    ))}
                  {selectedExtracurricularCategory === "Competitions" &&
                    COMPETITIONS.map((competition) => (
                      <option key={competition} value={competition}>
                        {competition}
                      </option>
                    ))}
                </select>
                <Button
                  type="button"
                  text="Add"
                  onClick={handleAddExtracurricular}
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
                  onChange={(e) => setSelectedTestType(e.target.value)}
                >
                  {TEST_TYPES.map((test) => (
                    <option key={test} value={test}>
                      {test}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={testScore}
                  onChange={(e) => setTestScore(e.target.value)}
                  placeholder="Score (e.g., 1450)"
                />
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
                      {item.testType}: {item.score}
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

            {/* Music Hobbies */}
            <div className={styles.formGroup}>
              <label>Music Hobbies</label>
              <div className={styles.inputRow}>
                <select
                  value={selectedInstrument}
                  onChange={(e) => setSelectedInstrument(e.target.value)}
                >
                  <option value="">Select Instrument</option>
                  {MUSIC_INSTRUMENTS.map((instrument) => (
                    <option key={instrument} value={instrument}>
                      {instrument}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  value={yearsOfExp}
                  onChange={(e) => setYearsOfExp(Number(e.target.value))}
                  placeholder="Years of Experience"
                  min="1"
                />
                <select
                  value={musicLevel}
                  onChange={(e) => setMusicLevel(e.target.value)}
                >
                  <option value="">Select Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <Button
                  type="button"
                  text="Add"
                  onClick={handleAddMusicHobby}
                  className={styles.button}
                />
              </div>
              <ul className={styles.list}>
                {musicHobbies.map((item) => (
                  <li key={item.id} className={styles.listItem}>
                    <span>
                      {item.instrument} - {item.yearsOfExp} years - {item.level}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteMusicHobby(item.id)}
                      className={styles.deleteButton}
                      aria-label={`Delete ${item.instrument} hobby`}
                    >
                      &times;
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Hobbies */}
            <div className={styles.formGroup}>
              <label>Other Hobbies</label>
              <div className={styles.inputRow}>
                <select
                  value={selectedHobby}
                  onChange={(e) => setSelectedHobby(e.target.value)}
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

export default Profile;
