// app/profile/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import Button from "../../src/components/Button/Button";
import ProtectedRoute from "../../src/components/ProtectedRoute";
import { useAuth } from "../../src/context/AuthContext";

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();

  // State for Extracurriculars
  const [extracurriculars, setExtracurriculars] = useState(user?.extracurriculars || []);
  const [newExtracurricular, setNewExtracurricular] = useState("");
  const [extracurricularCategory, setExtracurricularCategory] = useState("Sports");

  // State for Test Scores
  const [testScores, setTestScores] = useState(user?.testScores || []);
  const [newTestScore, setNewTestScore] = useState({ testType: "", score: "" });

  // State for Music Hobbies
  const [musicHobbies, setMusicHobbies] = useState(user?.musicHobbies || []);
  const [newMusicHobby, setNewMusicHobby] = useState({ instrument: "", yearsOfExp: 0, level: "" });

  // Status Message
  const [statusMessage, setStatusMessage] = useState("");

  // Function to handle adding extracurriculars
  const handleAddExtracurricular = () => {
    if (newExtracurricular.trim() === "") return;
    const newEntry = {
      id: extracurriculars.length + 1,
      activity: newExtracurricular,
      category: extracurricularCategory,
    };
    setExtracurriculars([...extracurriculars, newEntry]);
    setNewExtracurricular("");
  };

  // Function to handle adding test scores
  const handleAddTestScore = () => {
    if (newTestScore.testType.trim() === "" || newTestScore.score.trim() === "") return;
    const newEntry = {
      id: testScores.length + 1,
      testType: newTestScore.testType,
      score: newTestScore.score,
    };
    setTestScores([...testScores, newEntry]);
    setNewTestScore({ testType: "", score: "" });
  };

  // Function to handle adding music hobbies
  const handleAddMusicHobby = () => {
    if (
      newMusicHobby.instrument.trim() === "" ||
      newMusicHobby.yearsOfExp <= 0 ||
      newMusicHobby.level.trim() === ""
    )
      return;
    const newEntry = {
      id: musicHobbies.length + 1,
      instrument: newMusicHobby.instrument,
      yearsOfExp: newMusicHobby.yearsOfExp,
      level: newMusicHobby.level,
    };
    setMusicHobbies([...musicHobbies, newEntry]);
    setNewMusicHobby({ instrument: "", yearsOfExp: 0, level: "" });
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
                  value={extracurricularCategory}
                  onChange={(e) => setExtracurricularCategory(e.target.value)}
                >
                  <option value="Sports">Sports</option>
                  <option value="Olympiads">Olympiads</option>
                  <option value="Hackathons">Hackathons</option>
                  <option value="Competitions">Competitions</option>
                </select>
                <input
                  type="text"
                  value={newExtracurricular}
                  onChange={(e) => setNewExtracurricular(e.target.value)}
                  placeholder="Add extracurricular activity"
                />
                <Button type="button" text="Add" onClick={handleAddExtracurricular} />
              </div>
              <ul className={styles.list}>
                {extracurriculars.map((item) => (
                  <li key={item.id}>
                    {item.category}: {item.activity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Test Scores */}
            <div className={styles.formGroup}>
              <label>Test Scores</label>
              <div className={styles.inputRow}>
                <input
                  type="text"
                  name="testType"
                  value={newTestScore.testType}
                  onChange={(e) => setNewTestScore({ ...newTestScore, testType: e.target.value })}
                  placeholder="Test Type (e.g., SAT)"
                />
                <input
                  type="text"
                  name="score"
                  value={newTestScore.score}
                  onChange={(e) => setNewTestScore({ ...newTestScore, score: e.target.value })}
                  placeholder="Score (e.g., 1450)"
                />
                <Button type="button" text="Add" onClick={handleAddTestScore} />
              </div>
              <ul className={styles.list}>
                {testScores.map((item) => (
                  <li key={item.id}>
                    {item.testType}: {item.score}
                  </li>
                ))}
              </ul>
            </div>

            {/* Music Hobby */}
            <div className={styles.formGroup}>
              <label>Music Hobby</label>
              <div className={styles.inputRow}>
                <input
                  type="text"
                  name="instrument"
                  value={newMusicHobby.instrument}
                  onChange={(e) => setNewMusicHobby({ ...newMusicHobby, instrument: e.target.value })}
                  placeholder="Instrument"
                />
                <input
                  type="number"
                  name="yearsOfExp"
                  value={newMusicHobby.yearsOfExp}
                  onChange={(e) => setNewMusicHobby({ ...newMusicHobby, yearsOfExp: Number(e.target.value) })}
                  placeholder="Years of Experience"
                />
                <input
                  type="text"
                  name="level"
                  value={newMusicHobby.level}
                  onChange={(e) => setNewMusicHobby({ ...newMusicHobby, level: e.target.value })}
                  placeholder="Level (e.g., Beginner, Intermediate, Advanced)"
                />
                <Button type="button" text="Add" onClick={handleAddMusicHobby} />
              </div>
              <ul className={styles.list}>
                {musicHobbies.map((item) => (
                  <li key={item.id}>
                    {item.instrument} - {item.yearsOfExp} years - {item.level}
                  </li>
                ))}
              </ul>
            </div>

            {/* Submit Button */}
            <Button type="submit" text="Save Profile" />
          </form>
        </section>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;
