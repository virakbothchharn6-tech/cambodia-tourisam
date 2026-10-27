# 🇰🇭 សេចក្តីណែនាំអំពីគម្រោង៖ គេហទំព័រទេសចរណ៍កម្ពុជា (Cambodia Tourism Platform)

**Project Name:** Cambodia Tourism Offline-First Web Application  
**Author:** Chharn Virakboth  
**Tech Stack:** React (Vite), Tailwind CSS v4, Lucide React, React Router

---

## 📖 ១. អំពីគម្រោង (Project Overview)

គេហទំព័រនេះត្រូវបានបង្កើតឡើងសម្រាប់កម្មវិធីប្រកួតប្រជែងបង្កើតគេហទំព័រទេសចរណ៍កម្ពុជា ដោយផ្តោតសំខាន់លើស្ថាបត្យកម្ម **Offline-First ១០០%**៖

- ដំណើរការទិន្នន័យទាំងអស់តាមរយៈ `localStorage` និង Local Assets ក្នុង `public/`។
- មិនពឹងផ្អែកលើការតភ្ជាប់អ៊ីនធឺណិតដើម្បីបង្ហាញព័ត៌មាន រូបភាព វីដេអូ ឬប្រព័ន្ធកក់ឡើយ។
- គាំទ្រទាំងភាសាខ្មែរ និងភាសាអង់គ្លេស (Bilingual Support) ព្រមទាំង Dark Mode បែបផ្ទៃផ្កាយរះ (Starry Night Theme)។

---

## 🚀 ២. ជំហាននៃការតម្លើង និងដំណើរការ (Installation & Setup Instructions)

សូមអនុវត្តតាមលំដាប់លំដោយដូចខាងក្រោម៖

### ជំហានទី ១៖ ចូលទៅកាន់ Folder គម្រោង

បើក Terminal (ឬ Command Prompt) នៅក្នុងថតគម្រោង៖

```bash
cd cambodia-tourism​
ជំហានទី ២៖ ដំឡើងកញ្ចប់ Libraries (Dependencies)


npm install

ជំហានទី ៣៖ ដំណើរការ Development Server
npm run dev


ជំហានទី ៤៖ បើកមើលលទ្ធផលលើ Browser
ក្រោយពេលដំណើរការរួច សូមចូលទៅកាន់ Link ខាងក្រោមនៅលើ Google Chrome ឬ Edge៖
👉 http://localhost:5173/
🔑 ៣. គណនីសម្រាប់តេស្តសាកល្បង (Test & Demo Credentials)
ប្រព័ន្ធត្រូវបានបែងចែកសិទ្ធិជាពីរយ៉ាងច្បាស់លាស់ (Role-Based Access Control)៖
Admin Portal:
Username: admin
Password: admin123
សិទ្ធិ៖ ចូលមើលផ្ទាំង /admin គ្រប់គ្រងបញ្ជីកក់ និងចំណូលសរុប
Tourist (User):
Username: tourist
Password: 123456
សិទ្ធិ៖ គណនីភ្ញៀវទេសចរ សម្រាប់កក់សំបុត្រ និងសណ្ឋាគារ
New Registration:
បង្កើតដោយខ្លួនឯងនៅលើទំព័រ Login/Register (សិទ្ធិជា Tourist ទូទៅ)
🌟 ៤. មុខងារសំខាន់ៗដែលបានអភិវឌ្ឍ (Core Implemented Features)
១. ទំព័រដើម និងរុករក (Home & Explore):
វីដេអូ Hero Background (hero.mp4) និងផ្ទាំងស្វែងរកតំបន់ទេសចរណ៍តាមប្រភេទ (Historical, Coastal, Nature, Culture)។
តំណភ្ជាប់ Google Maps Interactive Link លើរាល់គោលដៅទេសចរណ៍ទាំងអស់។
២. កាលវិភាគធ្វើដំណើរ និងសណ្ឋាគារ (Places to Go & Hotels):
កាលវិភាគណែនាំដំណើរកម្សាន្តតាមតំបន់ ៣ ថ្ងៃ ២ យប់។
បញ្ជីសណ្ឋាគារប្រណីតក្នុងស្រុក (Raffles Le Royal, Sofitel Angkor, Song Saa Resort) ជាមួយ Google Maps និងប្រព័ន្ធកក់បន្ទប់។
៣. ប្រព័ន្ធកក់ប្រាក់ និងទូទាត់ KHQR (Booking & Payment Flow):
User Authentication Guard: តម្រូវឱ្យ User ធ្វើការ Login ឬ Register ជាមុនសិន ទើបអាចឈានទៅដល់ជំហានបង្ហាញ Bakong KHQR។
Payment Confirmation: មាន Checkbox បញ្ជាក់ការផ្ទេរប្រាក់ និង Pop-up Warning ប្រសិនបើមិនទាន់បានបង់ប្រាក់។
Print Receipt: មានប័ណ្ណសង្ខេបវិក្កយបត្រ និងប៊ូតុងចុចបោះពុម្ព (Print / PDF Export) តាមរយៈ Browser ផ្ទាល់។
៤. ប្រព័ន្ធការពារសុវត្ថិភាព Admin (Admin Protection):
ទំព័រ /admin ត្រូវបានការពារដោយស្វ័យប្រវត្តិ។ ប្រសិនបើ User ធម្មតាចូល ឬមិនទាន់ Login នោះប្រព័ន្ធនឹងបង្ហាញផ្ទាំង Access Denied ហើយមិនបង្ហាញទិន្នន័យចំណូលឡើយ។
៥. ជំនួយការឆ្លាតវៃ (Cambodia Concierge Bot):
ផ្ទាំង Bot អណ្តែតនៅជ្រុងក្រោមស្ដាំ ដំណើរការ Offline ១០០% សម្រាប់ឆ្លើយតបសេវាកម្ម៖
កក់ម៉ូតូជិះខ្លួនឯង (Scoopy, Click, Wave)
កក់មគ្គទេសក៍ទេសចរណ៍ (Tour Guide)
សេវាកម្មរថយន្តទទួលពីព្រលានយន្តហោះ (Alphard, Starex, SUV)
លេខទូរស័ព្ទទាក់ទងបន្ទាន់របស់សណ្ឋាគារ
មានប៊ូតុងភ្ជាប់ទៅ Telegram ផ្ទាល់ (@Ul_xnma)។
៦. ទំព័របន្ថែមសម្រាប់បំពេញបន្ថែម (Extended Pages):
ម្ហូបអាហារតាមតំបន់ (/foods): មុខម្ហូបខ្មែរប្រពៃណី និងប៊ូតុង Google Maps ស្វែងរកហាងក្បែរនោះ។
ពិធីបុណ្យជាតិ (/events): ប្រតិទិនបុណ្យជាតិ ដើរតាមម៉ោងកុំព្យូទ័រពិតប្រាកដ រាប់ថយក្រោយ (Days Remaining) និងកម្មវិធីពិធីបុណ្យលម្អិត។
គន្លឹះធ្វើដំណើរ និងលេខសង្គ្រោះបន្ទាន់ (/tips): លេខបន្ទាន់ ១១៧, ១១៩ ជាមួយមុខងារ Click-to-Call។
ឧបករណ៍ប្តូរប្រាក់ (/converter): គណនាប្រាក់រៀល (KHR) និងដុល្លារ (USD) ដោយមិនបាច់មាន Internet។
```
