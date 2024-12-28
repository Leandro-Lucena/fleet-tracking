# 🚛 Fleet Tracking

Fleet Tracking is a modern and robust system designed to manage and track vehicle fleets. Developed with cutting-edge technologies, it provides an efficient and scalable solution for creating geographic routes and monitoring private fleet vehicles in real-time as they move across the map.

## ✨ Features

- 📍 **Real-Time Vehicle Tracking**: Monitor your fleet vehicles live on a map.
- 🗺️ **Geographic Route Creation**: Create routes easily with Google Maps.
- 🌐 **Multi-Language Support**: Available in Portuguese (Brazil), English, and Spanish.
- 🛠️ **Scalable Architecture**: Built with modern technologies to handle fleets of any size.
- 📱 **Responsive Design**: Adaptive interface for desktops, tablets, and mobile devices, ensuring a great experience on any screen.

## 🛠️ Technologies Used

- 💻 **Frontend**: [Next.js](https://nextjs.org/) - React framework for web application development.
- 🔧 **Backend**: [NestJS](https://nestjs.com/) and [GoLang](https://golang.org/) - GoLang is used as a simulator to send coordinates to Kafka, simulating vehicles moving along defined routes, which are consumed from Kafka via WebSocket by Next.js.
- 🗄️ **Database**: [MongoDB](https://www.mongodb.com/) - NoSQL database for managing dynamic and large datasets.
- 🐳 **Containerization**: [Docker](https://www.docker.com/) - For consistent and portable application deployment.
- 🎨 **Styling**: [Tailwind CSS](https://tailwindcss.com/) - For a responsive and modern interface.
- 🌍 **Maps API**: [Google Maps APIs](https://developers.google.com/maps) - For real-time location and route rendering.
- 📨 **Messaging System**: [Apache Kafka](https://kafka.apache.org/) - Ensuring reliable and high-throughput communication.

## 🚀 Getting Started

### Requirements

- Docker installed on your machine.
- A Google Cloud API Key (can be obtained for free from the Google Cloud Console) with the following APIs enabled: Directions API, Maps JavaScript API, and Places API. .

### Setup Instructions

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Leandro-Lucena/fleet-tracking
   ```

2. Rename the `.env.example` files to `.env`,and replace `<YOUR_GOOGLE_API_KEY>` with your Google Cloud API Key. Update the `.env` files in both the `/nestjs-api` and `/next-frontend` directories.

3. Navigate to the project root directory and start the containers using Docker Compose:

   ```bash
   docker compose up
   ```

4. Sit back, relax, and grab a coffee ☕ while Docker sets everything up! Once all containers are up, access the Fleet Tracking on your browser via:
   ```
   http://localhost:3001
   ```

---

Enjoy exploring how the Fleet Tracking system works and see how the project is structured!
