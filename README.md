
# Cafe zur Bäckergrube

Welcome to the repository for the Cafe zur Bäckergrube website. This project aims to provide an accessible and user-friendly experience for all visitors, including features specifically designed for individuals with disabilities.

## Features

- **Responsive Design**: The website is designed to be responsive and works well on various devices, including desktops, tablets, and smartphones.
- **Text-to-Speech Functionality**: Users can have the text on the website read aloud to them. This feature helps visually impaired users and those who prefer auditory content.
- **Adjustable Font Size**: Visitors can increase or decrease the font size to enhance readability.
- **Color Contrast Modes**: The site includes various color contrast modes to aid users with visual impairments, including a high-contrast mode and a blue-light filter mode.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/cafe-zur-baeckergrube.git
    ```
2. Navigate to the project directory:
    ```bash
    cd cafe-zur-baeckergrube
    ```

## Usage

Open `Startseite.html` in your preferred web browser to view the homepage of the Cafe zur Bäckergrube.

## Project Structure

```
cafe-zur-baeckergrube/
├── .git/
├── pictures/
│   ├── torte.jpg
│   ├── fassade_cafe.jpg
│   └── ...
├── Angebot.html
├── Angebot.jpeg
├── Feiern.html
├── Feiern.jpeg
├── Impressum.html
├── LICENSE
├── README.md
├── script.js
├── Startseite.html
├── Startseite.jpeg
├── Ueber_Uns.html
├── Ueber_Uns.jpeg
├── Website.docx
```

- **`.git/`**: Git repository configuration files.
- **`pictures/`**: Folder containing image files used on the website.
- **`Angebot.html`**: HTML file for the offerings page.
- **`Angebot.jpeg`**: Image for the offerings page.
- **`Feiern.html`**: HTML file for the events page.
- **`Feiern.jpeg`**: Image for the events page.
- **`Impressum.html`**: HTML file for the imprint and data protection page.
- **`LICENSE`**: License file for the project.
- **`README.md`**: This README file.
- **`script.js`**: JavaScript file containing functionality for text-to-speech, font size adjustment, and color contrast modes.
- **`Startseite.html`**: The main HTML file for the website's homepage.
- **`Startseite.jpeg`**: Image for the homepage.
- **`Ueber_Uns.html`**: HTML file for the "About Us" page.
- **`Ueber_Uns.jpeg`**: Image for the "About Us" page.
- **`Website.docx`**: Documentation or additional information about the website.

## JavaScript Functions

The `script.js` file includes the following functions:

- **stopReading()**: Stops the text-to-speech functionality.
- **readText()**: Reads all text on the page using the Web Speech API.
- **getAllTextOnPage()**: Collects all text from specified HTML elements on the page.
- **speak_text(text)**: Uses the Web Speech API to read the provided text.
- **adjustFontSize(action)**: Adjusts the font size based on the provided action ('increase' or 'decrease').
- **changeColors(bgColor, textColor, hooverBgColor)**: Changes the background color, text color, and hover background color for accessibility.

## Contribution

Feel free to contribute to this project by creating pull requests or reporting issues. Your feedback and contributions are highly appreciated.

## License

This project is licensed under the Apache License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please contact me at arneseufert@web.de.

---

Thank you for visiting the Cafe zur Bäckergrube website!
