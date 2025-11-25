# Data Management System

## 📁 JSON Data Structure

Portfolio hiện đã được chuyển từ hardcode sang hệ thống JSON để dễ dàng quản lý và cập nhật nội dung.

### 🗂️ Files Structure

```
data/
├── config.json       # Site configuration & settings
├── translations.json # Multi-language content
├── projects.json     # Project portfolio data
├── skills.json       # Technical skills & tools
└── certificates.json # Achievements & certifications
```

## 📋 Usage Guide

### Adding New Project
1. Open `data/projects.json`
2. Add new project object to the array:
```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Project description",
  "category": "web|mobile|desktop|ai|extension|system",
  "technologies": ["Tech1", "Tech2"],
  "github": "https://github.com/...",
  "demo": "https://demo-url.com",
  "image": "fas fa-icon-name",
  "featured": true|false
}
```

### Adding New Skill
1. Open `data/skills.json`
2. Find the appropriate category
3. Add to skills array:
```json
{
  "name": "Skill Name",
  "icon": "images/technologies/icon.png",
  "proficiency": 85
}
```

### Adding Translation
1. Open `data/translations.json`
2. Add new key to both `en` and `vi` objects:
```json
{
  "en": {
    "new_key": "English text"
  },
  "vi": {
    "new_key": "Văn bản tiếng Việt"
  }
}
```

### Adding Certificate
1. Open `data/certificates.json`
2. Add new certificate to array:
```json
{
  "id": "unique-id",
  "title": {
    "en": "English Title",
    "vi": "Tiêu đề tiếng Việt"
  },
  "issuer": "Organization Name",
  "date": "YYYY-MM-DD",
  "image": "path/to/image.jpg",
  "description": {
    "en": "English description",
    "vi": "Mô tả tiếng Việt"
  },
  "skills": ["Skill1", "Skill2"],
  "featured": true|false
}
```

### Updating Configuration
1. Open `data/config.json`
2. Modify site settings, social links, stats, etc.

## 🔄 Automatic Loading

The application automatically loads all JSON data on initialization:
- Async loading for better performance
- Fallback handling if JSON fails to load
- Dynamic rendering based on loaded data

## 🎯 Benefits

- ✅ **Easy Updates**: Change content without touching code
- ✅ **Scalable**: Add unlimited projects, skills, certificates
- ✅ **Multi-language**: Centralized translation management
- ✅ **Maintainable**: Clean separation of data and logic
- ✅ **Professional**: Industry-standard approach