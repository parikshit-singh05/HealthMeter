# HealthMeter

HealthMeter is a comprehensive web application designed to help users monitor and improve their health through interactive tools and educational resources. The platform offers BMI calculation, calorie tracking, personalized exercise suggestions, and an extensive health information hub, all within an intuitive and responsive interface.

## Features

### BMI Calculator
The BMI (Body Mass Index) calculator allows users to input their height and weight to receive an immediate calculation of their BMI value. Results include the numerical BMI score, weight category classification (Underweight, Normal weight, Overweight, or Obese), and a brief explanation of what the result means for their health. This feature serves as a simple first step in understanding one's current health status.

### Calorie Counter
The integrated calorie counter enables users to track their daily food intake by searching for and logging food items from a pre-populated database. Each entry displays the food name, quantity, and associated calorie content. Users can add multiple items throughout the day, remove entries as needed, and view a running total of their calorie consumption. This tool helps users maintain awareness of their nutritional intake and supports dietary planning.

### Personalized Exercise Suggestions
Based on the user's BMI calculation, HealthMeter provides tailored exercise recommendations categorized by fitness level (Beginner, Intermediate, and Advanced). These suggestions are specifically designed to address the health needs associated with different weight categories, offering appropriate activities, intensity levels, and progression paths. All recommendations include important safety disclaimers to encourage consultation with healthcare professionals.

### Health Information Hub
The Health Hub section offers educational content covering various aspects of health and wellness. Articles include detailed explanations of BMI and its significance, the relationship between nutrition and fitness, common health myths with factual corrections, and best practices for diet and exercise. This knowledge base helps users make informed decisions about their health journey beyond just the numbers.

### Additional Features
- Responsive design that adapts seamlessly to different screen sizes and devices
- User testimonials highlighting positive experiences with the platform
- Newsletter subscription option for users to receive regular health tips and updates
- Clean, intuitive interface with a health-focused color scheme and layout

## Installation

To set up the HealthMeter website locally, follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/yourusername/healthmeter.git
   ```

2. Navigate to the project directory:
   ```
   cd healthmeter
   ```

3. No additional dependencies or build steps are required as this is a static website using vanilla HTML, CSS, and JavaScript.

4. Open the `index.html` file in your preferred web browser to view the website:
   ```
   open index.html   # On macOS
   # OR
   xdg-open index.html   # On Linux
   # OR
   start index.html   # On Windows
   ```

## Usage

### BMI Calculator
1. Navigate to the BMI Calculator section by clicking on "BMI Calculator" in the navigation menu or the call-to-action button on the homepage.
2. Enter your height in centimeters in the "Height" field.
3. Enter your weight in kilograms in the "Weight" field.
4. Click the "Calculate BMI" button to view your results.
5. Your BMI value, category, and a brief explanation will appear below the form.

### Calorie Counter
1. Navigate to the Calorie Counter section by clicking on "Calorie Counter" in the navigation menu.
2. To add a food item:
   - Type a food name in the search field (e.g., "apple", "chicken breast")
   - Click the "Search" button to see matching items
   - Select an item from the results list
   - Specify the quantity if different from the default
   - Click "Add to Log" to record the item
3. Your logged items will appear in the "Today's Log" section with their calorie content.
4. To remove an item, click the "Remove" button next to it.
5. The total calorie count is displayed at the bottom of the log.

### Exercise Suggestions
1. First, calculate your BMI using the BMI Calculator.
2. Once your BMI is calculated, scroll down to the "Personalized Exercise Suggestions" section.
3. Review the exercise recommendations tailored to your BMI category, organized by fitness level.
4. Choose activities appropriate for your current fitness level and preferences.

### Health Information Hub
1. Navigate to the Health Hub section by clicking on "Health Hub" in the navigation menu.
2. Browse through the articles to learn about BMI, nutrition, fitness, and health myths.
3. Use this information to complement the interactive tools and enhance your health journey.

## Technologies Used

HealthMeter is built using the following technologies:

- **HTML5**: Provides the structural foundation of the website with semantic markup for improved accessibility and SEO.
- **CSS3**: Handles all styling aspects, including the responsive design that adapts to various screen sizes, color schemes, transitions, and layout management.
- **JavaScript (ES6+)**: Powers all interactive elements, including the BMI calculator, calorie counter functionality, dynamic exercise suggestions, and form validations.
- **Responsive Design**: Implements media queries and flexible layouts to ensure optimal viewing experience across devices from mobile phones to desktop monitors.
- **Local Storage**: Future implementations may include browser local storage to persist user data between sessions.

No external libraries or frameworks are used, making this a lightweight and dependency-free application that demonstrates proficiency in vanilla web technologies.

## Contributing

Contributions to the HealthMeter project are welcome and appreciated. To contribute:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix:
   ```
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them with descriptive commit messages:
   ```
   git commit -m "Add feature: description of your changes"
   ```
4. Push your changes to your fork:
   ```
   git push origin feature/your-feature-name
   ```
5. Submit a pull request to the main repository.

### Contribution Guidelines
- Ensure your code follows the existing style and structure.
- Add comments for complex functionality to maintain code readability.
- Test your changes thoroughly before submitting a pull request.
- Update documentation as needed to reflect your changes.

### Areas for Improvement
- Expanding the food database in the calorie counter
- Adding user accounts and data persistence
- Implementing additional health calculators (e.g., body fat percentage, daily calorie needs)
- Enhancing the information hub with more articles and visual aids
- Adding data visualization for tracking progress over time

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Health information content is provided for educational purposes only and should not replace professional medical advice.
- The food database in the calorie counter contains approximate values and should be used as general guidance.
- Special thanks to all contributors and users who provide feedback to improve this tool.

---

© 2025 HealthMeter. All rights reserved.
