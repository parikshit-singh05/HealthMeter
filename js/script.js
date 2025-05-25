document.addEventListener("DOMContentLoaded", () => {
    const bmiForm = document.getElementById("bmi-form");
    const bmiResultDiv = document.getElementById("bmi-result");
    const calorieForm = document.getElementById("calorie-form");
    const foodSearchInput = document.getElementById("food-search");
    const searchBtn = document.getElementById("search-btn");
    const searchResultsDiv = document.getElementById("search-results");
    const quantityInput = document.getElementById("quantity");
    const foodLogList = document.getElementById("food-log-list");
    const totalCaloriesSpan = document.getElementById("total-calories-value");
    const exerciseContentDiv = document.getElementById("exercise-content");
    const newsletterForm = document.getElementById("newsletter-form");
    const contactForm = document.getElementById("contact-form");
    const contactResponseDiv = document.getElementById("contact-response");

    // --- Mobile Navigation Toggle ---
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener("click", () => {
            const isActive = mainNav.classList.toggle("active");
            mobileNavToggle.setAttribute("aria-expanded", isActive);
            if (isActive) {
                mobileNavToggle.innerHTML = "&times;"; // Change to X icon
            } else {
                mobileNavToggle.innerHTML = "&#9776;"; // Change back to hamburger
            }
        });
    }

    // --- Smooth Scrolling for Nav Links ---
    document.querySelectorAll(".main-nav a[href^=\"#\"], .logo-text[href^=\"#\"], .cta-button[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
                if (mainNav && mainNav.classList.contains("active")) {
                    mainNav.classList.remove("active");
                    mobileNavToggle.setAttribute("aria-expanded", "false");
                    mobileNavToggle.innerHTML = "&#9776;";
                }
            }
        });
    });

    // --- FAQ Accordion ---
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const questionButton = item.querySelector(".faq-question");
        const answerDiv = item.querySelector(".faq-answer");
        const icon = questionButton.querySelector(".faq-icon");

        questionButton.addEventListener("click", () => {
            const isActive = item.classList.toggle("active");
            if (isActive) {
                answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
                answerDiv.style.paddingTop = "10px";
                answerDiv.style.paddingBottom = "20px";
                icon.textContent = "-";
            } else {
                answerDiv.style.maxHeight = "0";
                answerDiv.style.paddingTop = "0";
                answerDiv.style.paddingBottom = "0";
                icon.textContent = "+";
            }
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".faq-answer").style.maxHeight = "0";
                    otherItem.querySelector(".faq-answer").style.paddingTop = "0";
                    otherItem.querySelector(".faq-answer").style.paddingBottom = "0";
                    otherItem.querySelector(".faq-icon").textContent = "+";
                }
            });
        });
    });

    // --- Testimonials Slider ---
    const testimonialsContainer = document.querySelector(".testimonial-slider-container");
    if (testimonialsContainer) {
        const slider = testimonialsContainer.querySelector(".testimonial-slider");
        const items = testimonialsContainer.querySelectorAll(".testimonial-item");
        const prevButton = testimonialsContainer.querySelector(".slider-prev");
        const nextButton = testimonialsContainer.querySelector(".slider-next");
        let currentIndex = 0;
        const itemsToShow = 1; // Show 1 item at a time on mobile, adjust with CSS for larger screens

        function updateSlider() {
            if (!slider || items.length === 0) return;
            const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight); // Include margin
            slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            
            if (prevButton) prevButton.disabled = currentIndex === 0;
            if (nextButton) nextButton.disabled = currentIndex >= items.length - itemsToShow;
        }

        if (prevButton) {
            prevButton.addEventListener("click", () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                }
            });
        }

        if (nextButton) {
            nextButton.addEventListener("click", () => {
                if (currentIndex < items.length - itemsToShow) {
                    currentIndex++;
                    updateSlider();
                }
            });
        }
        // Initial setup
        if (items.length > 0) {
             updateSlider();
             window.addEventListener("resize", updateSlider); // Recalculate on resize
        }
    }

    // --- BMI Calculator --- 
    if (bmiForm) {
        bmiForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const height = parseFloat(document.getElementById("height").value);
            const weight = parseFloat(document.getElementById("weight").value);
            if (height > 0 && weight > 0) {
                const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
                let category = "";
                let advice = "";
                if (bmi < 18.5) {
                    category = "Underweight";
                    advice = "Consider consulting a healthcare provider or nutritionist to ensure you are getting adequate nutrition. Focus on nutrient-dense foods to reach a healthy weight.";
                } else if (bmi >= 18.5 && bmi <= 24.9) {
                    category = "Normal weight";
                    advice = "Congratulations! You are in a healthy weight range. Maintain your healthy habits with a balanced diet and regular exercise.";
                } else if (bmi >= 25 && bmi <= 29.9) {
                    category = "Overweight";
                    advice = "Consider adopting a healthier diet and increasing physical activity. Small, sustainable changes can make a big difference.";
                } else {
                    category = "Obesity";
                    advice = "It is recommended to consult a healthcare provider for advice on managing your weight. Focus on a balanced diet and regular, moderate exercise.";
                }
                bmiResultDiv.innerHTML = `<h3>Your BMI: ${bmi}</h3><p>Category: <strong>${category}</strong></p><p>${advice}</p>`;
                loadExerciseSuggestions(category);
            } else {
                bmiResultDiv.innerHTML = "<p>Please enter valid height and weight.</p>";
            }
        });
    }

    // --- Calorie Counter --- 
    let foodData = {
        "apple": 95, "banana": 105, "chicken breast": 165, "broccoli": 55,
        "rice": 130, "salmon": 208, "almonds": 7, "egg": 78, "milk": 103, "bread slice": 80,
        "orange": 62, "grapes": 69, "strawberry": 4, "blueberry": 84, "yogurt": 150,
        "peanut butter": 190, "spinach": 23, "carrot": 41, "potato": 163, "beef steak": 250,
        "tuna can": 130, "lentils": 116, "beans black": 132, "oats": 150, "quinoa": 120
    };
    let dailyLog = [];

    if (searchBtn) {
        searchBtn.addEventListener("click", () => {
            const searchTerm = foodSearchInput.value.toLowerCase().trim();
            searchResultsDiv.innerHTML = "";
            if (searchTerm) {
                const results = Object.keys(foodData).filter(food => food.includes(searchTerm));
                if (results.length > 0) {
                    results.forEach(food => {
                        const div = document.createElement("div");
                        div.textContent = `${food} (~${foodData[food]} kcal per serving/100g)`;
                        div.addEventListener("click", () => {
                            foodSearchInput.value = food;
                            searchResultsDiv.innerHTML = "";
                        });
                        searchResultsDiv.appendChild(div);
                    });
                } else {
                    searchResultsDiv.innerHTML = "<div>No food found.</div>";
                }
            } else {
                 searchResultsDiv.innerHTML = "<div>Please enter a food to search.</div>";
            }
        });
    }

    if (calorieForm) {
        calorieForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const foodName = foodSearchInput.value.toLowerCase().trim();
            const quantity = parseFloat(quantityInput.value) || 1;
            if (foodData[foodName]) {
                const calories = foodData[foodName] * quantity;
                dailyLog.push({ name: foodName, calories: calories, quantity: quantity });
                updateCalorieLog();
                foodSearchInput.value = "";
                quantityInput.value = "1";
                searchResultsDiv.innerHTML = "";
            } else {
                alert("Food not found. Please select from search results.");
            }
        });
    }

    function updateCalorieLog() {
        foodLogList.innerHTML = "";
        let totalCalories = 0;
        dailyLog.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.quantity} serving(s) of ${item.name} - ${item.calories.toFixed(0)} kcal`;
            foodLogList.appendChild(li);
            totalCalories += item.calories;
        });
        totalCaloriesSpan.textContent = totalCalories.toFixed(0);
    }

    // --- Exercise Suggestions --- 
    function loadExerciseSuggestions(bmiCategory) {
        if (!exerciseContentDiv) return;
        let suggestions = "";
        switch (bmiCategory) {
            case "Underweight":
                suggestions = `<h4>Focus on Strength and Healthy Weight Gain:</h4><ul><li><strong>Strength Training:</strong> 2-3 times a week (e.g., squats, lunges, push-ups, resistance band exercises). Focus on compound movements.</li><li><strong>Moderate Cardio:</strong> Activities like brisk walking or cycling for 30 minutes, 3-5 times a week.</li><li><strong>Nutrition:</strong> Ensure you are eating enough calories from nutrient-dense foods. Consult a nutritionist if needed.</li></ul>`;
                break;
            case "Normal weight":
                suggestions = `<h4>Maintain Your Fitness:</h4><ul><li><strong>Varied Cardio:</strong> 3-5 times a week (e.g., running, swimming, dancing, cycling for 30-60 minutes).</li><li><strong>Strength Training:</strong> 2-3 times a week, targeting all major muscle groups.</li><li><strong>Flexibility & Balance:</strong> Incorporate activities like yoga or Pilates.</li></ul>`;
                break;
            case "Overweight":
                suggestions = `<h4>Focus on Calorie Burning and Muscle Building:</h4><ul><li><strong>Regular Cardio:</strong> Aim for at least 150 minutes of moderate-intensity cardio per week (e.g., brisk walking, jogging, cycling, swimming). Start slow and gradually increase intensity/duration.</li><li><strong>Strength Training:</strong> 2-3 times a week to build muscle mass, which helps burn more calories.</li><li><strong>Low-Impact Options:</strong> Consider swimming or water aerobics if you have joint concerns.</li></ul>`;
                break;
            case "Obesity":
                suggestions = `<h4>Start with Low-Impact and Gradual Increases:</h4><ul><li><strong>Consult a Doctor:</strong> Before starting any new exercise program.</li><li><strong>Low-Impact Cardio:</strong> Daily walking (start with 10-15 minutes, gradually increase to 30-60 minutes), swimming, or cycling at a comfortable pace.</li><li><strong>Bodyweight Exercises:</strong> Simple strength exercises like chair squats, wall push-ups.</li><li><strong>Consistency is Key:</strong> Focus on making physical activity a regular part of your day.</li></ul>`;
                break;
            default:
                suggestions = "<p>Calculate your BMI to see personalized suggestions.</p>";
        }
        exerciseContentDiv.innerHTML = suggestions;
    }
    if (exerciseContentDiv) loadExerciseSuggestions("");

    // --- Newsletter Form Submission (Placeholder) ---
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector("input[type=\"email\"]");
            if (emailInput && emailInput.value) {
                alert(`Thank you for subscribing, ${emailInput.value}! (This is a demo)`);
                newsletterForm.reset();
            } else {
                alert("Please enter a valid email address.");
            }
        });
    }

    // --- Contact Form Submission (Placeholder) ---
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("contact-name").value;
            const email = document.getElementById("contact-email").value;
            const subject = document.getElementById("contact-subject").value;
            const message = document.getElementById("contact-message").value;
            if (name && email && subject && message) {
                contactResponseDiv.innerHTML = `<p class="success-message">Thank you, ${name}! Your message about \"${subject}\" has been received. We will get back to you shortly. (This is a demo)</p>`;
                contactForm.reset();
            } else {
                contactResponseDiv.innerHTML = "<p class=\"error-message\">Please fill out all fields in the contact form.</p>";
            }
            setTimeout(() => { contactResponseDiv.innerHTML = ""; }, 7000);
        });
    }
});
