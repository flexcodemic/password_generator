# Password Generator App 🚀

Welcome to the **Password Generator App**, a powerful and flexible tool for creating secure, custom passwords! With this app, you can generate passwords tailored to your specific needs by selecting different character types (lowercase, uppercase, numbers, and symbols) and specifying a password length. 

---

## 🔑 Key Features

- **Dynamic Password Generation**: Create passwords with customizable length and character types.
- **Interactive Toggles**: Easily enable or disable lowercase, uppercase, numbers, and symbols.
- **Input Validation**: Ensure the password length is within acceptable limits (1–14 characters).
- **Instant Results**: Generated password is displayed instantly upon clicking the generate button.
- **User-Friendly Design**: Simple and intuitive interface for a seamless user experience.

---

## 🚀 How It Works

1. **Enter Password Length**: Input the desired password length (between 1 and 14 characters).
2. **Select Character Types**:
   - Click the respective buttons to toggle *lowercase letters*, *uppercase letters*, *numbers*, and *symbols*.
3. **Generate Password**:
   - Click the "Generate" button to create a password.
   - The result will appear instantly in the **output area**.

---

## 💻 Code Overview

### Core Functionality
- **`passwordGenerator`**: The main function that takes in the password length and selected character types to generate a random, secure password.
- **Event Listeners**: Each button has an associated event listener that updates the selection status dynamically.

### Character Types
- **Lowercase Letters**: `abcdefghijklmnopqrstuvwxyz`
- **Uppercase Letters**: `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
- **Numbers**: `0123456789`
- **Symbols**: `~!@#$%^&*()_-+=:;',[]{{\\|?.`

---

## 📂 File Structure

```plaintext
📁 Password-Generator-App
├── index.html        # Main HTML file with input fields and buttons
├── style.css         # CSS file for styling the app
├── app.js            # JavaScript file containing the password generator logic

```


## 📋 Usage Guide

Generate a Password
Open the app in your browser.
Enter the desired password length.

### Toggle the character type buttons:
- Lowercase
- Uppercase
- Numbers
- Symbols
  
Click "Generate" to display your password.

❗ Validation Messages
Length Validation:
❌ Password length must be at least 1
❌ Password length must NOT be greater than 14
Character Selection:
❌ Please select at least one character type
Empty Input:
Enter a valid password 

## 🎨 Customization
Feel free to modify the code to suit your specific needs! Change the character set, adjust styles, or add new features like:

Copy-to-clipboard functionality.
Advanced password strength indicators.
