# 🔐 Password Generator App

A responsive password generator built with **React** and **Tailwind CSS**, with real-time password creation based on user preferences for length, numbers, and special characters. Includes clipboard copy functionality and a toast notification using **react-toastify**.

## 🚀 Features

- Generate secure passwords with:
  - Customizable length (6 to 100)
  - Option to include numbers
  - Option to include special characters
- Copy generated password to clipboard
- Toast notification on copy
- Responsive UI using Tailwind CSS

## 🛠️ Tech Stack

- React
- Tailwind CSS
- react-toastify

## 📦 Installation

1. **Clone the repository:**

   ```bash
    git clone https://github.com/Mithilesh-27/Password-Generator.git
    cd Password-Generator
    ````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173/`.

## 🧪 How It Works

* Password is generated on every change in slider or checkbox.
* Password is created using:

  * Uppercase and lowercase letters by default.
  * Digits if "Numbers" checkbox is selected.
  * Special characters if "Characters" checkbox is selected.
* Clicking "Copy" will copy the current password to clipboard and show a toast.

## 🔧 Customization

* You can change the default password length by editing this line:

  ```js
  let [length, setLength] = useState(8)
  ```

* To adjust styling, edit the Tailwind classes in `App.jsx`.

## Live Demo

Check out the live version of the website here: [Springdale Public School](https://school-website-omega-gray.vercel.app/)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

## Author

This project was created by [Mithilesh Singpure](https://github.com/Mithilesh-27).

---

Made with ❤️ using React.
