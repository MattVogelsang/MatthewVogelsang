# Matt Vogelsang - Portfolio Website

A stunning, interactive portfolio website built with React, TypeScript, and Tailwind CSS. Features include background music, real-time weather, smooth animations, and a modern glass-morphism design.

## ✨ Features

### 🎵 Background Music Player
- Floating music player with play/pause controls
- Volume control and mute functionality
- Next/previous track navigation
- Glass-morphism design that expands on hover

### 🌤️ Real-Time Weather & Time
- Current location weather display
- Real-time clock with date
- Temperature in both Celsius and Fahrenheit
- Weather conditions, humidity, and wind speed
- Expandable details on hover

### 🎨 Enhanced Animations
- Smooth scroll-triggered animations
- Parallax background effects
- Floating elements with staggered timing
- Typing effect for the main heading
- Glass-morphism design throughout

### 📱 Responsive Design
- Mobile-first approach
- Dark/light mode toggle
- Smooth transitions and hover effects
- Optimized for all screen sizes

### 🖼️ Project Showcase
- Real project images with hover effects
- Technology stack tags
- Interactive project cards
- Professional presentation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd MatthewVogelsang
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Weather API (Optional)**
   
   To get real weather data, you'll need an OpenWeatherMap API key:
   
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Get your free API key
   - Create a `.env` file in the root directory:
     ```env
     VITE_OPENWEATHERMAP_API_KEY=your_api_key_here
     ```
   
   If no API key is provided, the app will use mock weather data.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🛠️ Built With

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **OpenWeatherMap API** - Weather data

## 📁 Project Structure

```
src/
├── components/
│   ├── BackgroundMusic.tsx    # Music player component
│   ├── Header.tsx             # Navigation header
│   ├── HeroSection.tsx        # Main hero section
│   ├── ScrollAnimations.tsx   # Animation wrapper
│   └── WeatherTime.tsx        # Weather & time widget
├── images/                    # Project images
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
└── index.css                  # Global styles
```

## 🎨 Customization

### Adding Your Projects
1. Add project images to `src/images/`
2. Update the projects array in `App.tsx`
3. Include project details, technologies, and links

### Styling
- Colors are defined in CSS variables in `index.css`
- Animations can be customized in the CSS file
- Glass-morphism effects are applied via the `.glass` class

### Background Music
- Update the `playlist` array in `BackgroundMusic.tsx`
- Add your own music files or use external URLs
- Ensure music files are properly licensed

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Matt Vogelsang - [LinkedIn](https://www.linkedin.com/in/matthew-vogelsang-096514229/) - [GitHub](https://github.com/MattVogelsang)

---

**Note:** This portfolio features interactive elements that make it stand out from typical developer portfolios. The background music, real-time weather, and smooth animations create an engaging user experience that showcases both technical skills and attention to detail.

