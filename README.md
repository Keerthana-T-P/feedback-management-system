# Feedback Management System

A simple feedback management system built with Node.js, Express, TypeScript for the backend, and React with TypeScript for the frontend.

## Overview

This project allows users to submit feedback and view all submitted feedback. It is divided into two main parts: the backend (API server) and the frontend (user interface).

## Backend

### Setup

1. **Initialize Project**: Initialize a Node.js project with TypeScript support.
2. **Dependencies**: Install necessary dependencies including `express`, `cors`, `body-parser`, and `ts-node-dev` for development.
3. **File Structure**: Organize the backend into controllers, routes, and services.

### Logic and Approach

- **Express Server**: Set up an Express server to handle API requests.
- **Feedback Controller**: Create a controller to manage feedback-related actions.
  - `getAllFeedbacks`: Retrieves all feedback entries.
  - `addFeedback`: Adds new feedback with rate limiting based on the IP address.
- **Feedback Service**: Manage feedback data storage and business logic.
  - Store feedback in an in-memory array.
  - Implement rate limiting to ensure a user can only submit one feedback every 10 seconds.
- **Routes**: Define API endpoints for feedback actions.
  - `GET /api/feedback`: Retrieve all feedback entries.
  - `POST /api/feedback`: Submit new feedback.
