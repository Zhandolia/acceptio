// acceptio/src/context/AuthContext.tsx

"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define interfaces
interface User {
  id: number;
  name: string;
  email: string;
  extracurriculars: Extracurricular[];
  testScores: TestScore[];
  musicHobbies: MusicHobby[];
  hobbies: Hobby[];
}

interface Extracurricular {
  id: number;
  activity: string;
  category: string;
}

interface TestScore {
  id: number;
  testType: string;
  score: string;
}

interface MusicHobby {
  id: number;
  instrument: string;
  yearsOfExp: number;
  level: string;
}

interface Hobby {
  id: number;
  hobby: string;
}

// Define context type
interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
  updateUser: (updatedUser: User) => void;
}

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Mock login function
  const login = () => {
    const mockUser: User = {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      extracurriculars: [
        { id: 1, activity: "Basketball", category: "Sports" },
        { id: 2, activity: "Math Olympiad", category: "Olympiads" },
        { id: 3, activity: "Hackathon 2023", category: "Hackathons" },
      ],
      testScores: [
        { id: 1, testType: "SAT", score: "1450" },
        { id: 2, testType: "TOEFL", score: "110" },
      ],
      musicHobbies: [
        { id: 1, instrument: "Piano", yearsOfExp: 5, level: "Advanced" },
        { id: 2, instrument: "Violin", yearsOfExp: 3, level: "Intermediate" },
      ],
      hobbies: [
        { id: 1, hobby: "Photography" },
        { id: 2, hobby: "Reading" },
      ],
    };
    setUser(mockUser);
  };

  // Mock logout function
  const logout = () => {
    setUser(null);
  };

  // Update user data
  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
