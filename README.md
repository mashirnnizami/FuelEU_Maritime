# FuelEU Maritime Compliance Platform

## Overview
Full-stack FuelEU compliance dashboard implementing:
- Routes & baselines
- GHG comparison
- Banking (Article 20)
- Pooling (Article 21)

## Architecture
Hexagonal (Ports & Adapters)
- Core domain isolated
- UI + HTTP as adapters

## Run
Backend:
cd backend
npm install
npm run dev

Frontend:
cd frontend
npm install
npm run dev

## APIs
GET /routes
POST /routes/:id/baseline
GET /routes/comparison
GET /compliance/cb
POST /banking/bank
POST /pools
