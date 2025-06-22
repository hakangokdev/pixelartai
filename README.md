# 🎮 Pixel Art AI Generator

<div align="center">

![Pixel Art Generator](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-teal?style=for-the-badge&logo=tailwindcss)

**Transform your imagination into stunning pixel art with AI!**

*A modern, responsive web application powered by Google's Gemini Imagen API*

</div>

---

<p align="center">
  <img src="https://github.com/user-attachments/assets/56bbd27f-2170-4753-a134-adfb071b5686" width="750" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/73107d5f-f2f6-4d55-acd6-11b75dba5119" width="750" />
</p>


## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **AI-Powered Creation**
- Generate unique pixel art from simple text prompts
- Advanced 8-bit and 16-bit style rendering
- Optimized prompts for retro gaming aesthetics

### 🚀 **Modern Tech Stack**
- Built with Next.js 15 and React 19
- TypeScript for type safety
- Tailwind CSS for responsive design

</td>
<td width="50%">

### 🎭 **Beautiful UI/UX**
- Dark theme with gradient animations
- Smooth loading animations with pixel-themed spinner
- Fully responsive design for all devices

### ♿ **Accessibility First**
- WCAG compliant components
- Keyboard navigation support
- Screen reader friendly

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager
- Google Cloud account with Imagen API access

### Installation

```bash
# Clone the repository
git clone https://github.com/hakangokdev/pixelartai.git
cd pixelartai.git

# Install dependencies
npm install

# Create environment file
cp env.example .env.local
```

### Configuration

1. **Get your API Key:**
   - Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Create or select a project
   - Generate an API key

2. **Configure Environment:**
   ```bash
   # Edit .env.local
   NEXT_PUBLIC_GEMINI_API_KEY=your_actual_gemini_api_key_here
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:** [http://localhost:3000](http://localhost:3000)

---

## 🎯 How to Use

<div align="center">

### 1️⃣ Enter Your Prompt
Type a creative description like "a space knight with laser sword"

### 2️⃣ Generate Art
Click "Generate Pixel Art" or press Enter

### 3️⃣ Watch the Magic
AI creates your unique pixel art in seconds

### 4️⃣ Enjoy & Share
Download or share your creation!

</div>

---

## 🛠 Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | Next.js | 15.3.4 |
| **Language** | TypeScript | 5.x |
| **Frontend** | React | 19.0 |
| **Styling** | Tailwind CSS | 4.x |
| **AI Service** | Google Gemini | Imagen 3.0 |
| **Package Manager** | npm | Latest |

---

## 📁 Project Structure

```
📦 pixel-art-ai-generator/
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 🏠 page.tsx              # Main application page
│   │   ├── 🏗️ layout.tsx            # Root layout component
│   │   └── 🎨 globals.css           # Global styles & animations
│   ├── 📂 components/
│   │   ├── ⌨️ PromptInput.tsx        # Smart input with validation
│   │   ├── 🖼️ ImageDisplay.tsx       # Optimized image viewer
│   │   ├── ⏳ LoadingSpinner.tsx     # Pixel-themed loading animation
│   │   ├── ❌ ErrorDisplay.tsx       # User-friendly error handling
│   │   └── 🔗 GithubIcon.tsx        # Custom SVG icon component
│   └── 📂 services/
│       └── 🤖 geminiService.ts       # API integration & error handling
├── 📄 package.json                   # Dependencies & scripts
├── ⚙️ next.config.ts                 # Next.js configuration
├── 🎨 tailwind.config.js            # Tailwind CSS config
└── 📖 README.md                      # This file
```

---

## 🔧 API Configuration

### Google Gemini Setup

1. **Create Google Cloud Account**
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing

2. **Enable Imagen API**
   - Navigate to APIs & Services
   - Enable Vertex AI API
   - Configure billing (required for Imagen)

3. **Get API Key**
   - Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Generate new API key
   - Copy to your `.env.local` file

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GEMINI_API_KEY` | Your Google Gemini API key | ✅ Yes |

---

## 🎨 Customization

### Modify Pixel Art Style

Edit `src/services/geminiService.ts` to customize the generation prompt:

```typescript
const fullPrompt = `pixel art of ${userPrompt}, 8-bit style, 16-bit style, retro video game aesthetic, vibrant colors, clear outlines, simple background`;
```

### Customize UI Theme

Modify Tailwind classes in components or update `src/app/globals.css` for custom animations.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch:** `git checkout -b feature/amazing-feature`
3. **💬 Commit your changes:** `git commit -m 'Add amazing feature'`
4. **📤 Push to branch:** `git push origin feature/amazing-feature`
5. **🔀 Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Add JSDoc comments for complex functions
- Test your changes thoroughly
- Update documentation if needed

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🐛 Troubleshooting

<details>
<summary><strong>API Key Error</strong></summary>

```
NEXT_PUBLIC_GEMINI_API_KEY environment variable is not set
```

**Solution:**
1. Check `.env.local` file exists
2. Verify API key is correctly set
3. Restart development server
4. Clear Next.js cache: `rm -rf .next`

</details>

<details>
<summary><strong>Generation Fails</strong></summary>

**Common causes:**
- Invalid API key
- Exceeded quota limits
- Content policy violations
- Network connectivity issues

**Solutions:**
- Verify API key in Google AI Studio
- Check billing and quota limits
- Try different prompts
- Check network connection

</details>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google** for the amazing Gemini Imagen API
- **Vercel** for Next.js framework
- **Tailwind CSS** for beautiful styling
- **React** team for the awesome framework

---

<div align="center">

### 🌟 Star this project if you found it helpful!

Made with ❤️ by [Hakan Gök](https://github.com/hakangokdev)

[⬆ Back to top](#-pixel-art-ai-generator)

</div>
