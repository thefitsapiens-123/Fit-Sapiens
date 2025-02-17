export const formSections = [
  {
    title: "Personal Information",
    fields: [
      {
        name: "fullName",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "Enter your full name",
        width: "full",
      },
      {
        name: "age",
        label: "Age",
        type: "number",
        required: true,
        placeholder: "Enter your age",
        width: "half",
      },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        options: ["Male", "Female", "Other"],
        required: true,
        width: "half",
      },
      {
        name: "height",
        label: "Height (in cm)",
        type: "number",
        required: true,
        placeholder: "Enter height in centimeters",
        width: "half",
      },
      {
        name: "weight",
        label: "Weight (in kg)",
        type: "number",
        required: true,
        placeholder: "Enter weight in kilograms",
        width: "half",
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        required: true,
        placeholder: "Enter your email",
        width: "full",
      },
      {
        name: "phoneNumber",
        label: "Phone Number",
        type: "text",
        required: true,
        placeholder: "Enter your phone number",
        width: "full",
      },
      {
        name: "location",
        label: "Location and Time Zone",
        type: "text",
        required: true,
        placeholder: "Enter your location and time zone",
        width: "full",
      },
    ],
  },
  {
    title: "Health & Fitness Background",
    fields: [
      {
        name: "fitnessGoals",
        label:
          "What are your primary fitness goals? (e.g., weight loss, muscle gain)",
        type: "textarea",
        required: true,
        placeholder: "Describe your fitness goals",
        width: "full",
      },
      {
        name: "medicalConditions",
        label:
          "Do you have any medical conditions or past injuries that may affect your training?",
        type: "textarea",
        required: false,
        placeholder: "List any medical conditions or injuries",
        width: "full",
      },
      {
        name: "medicationsAllergies",
        label: "Are you taking any medications or have any food allergies?",
        type: "textarea",
        required: false,
        placeholder: "List any medications or allergies",
        width: "full",
      },
    ],
  },
  {
    title: "Lifestyle & Dietary Habits",
    fields: [
      {
        name: "activityLevel",
        label: "How active is your current lifestyle?",
        type: "select",
        options: ["Sedentary", "Lightly active", "Active", "Very active"],
        required: true,
        width: "full",
      },
      {
        name: "dietaryPractices",
        label:
          "Do you follow any specific dietary practices? (e.g., vegetarian, vegan, gluten-free)",
        type: "textarea",
        required: false,
        placeholder: "Describe your dietary practices",
        width: "full",
      },
      {
        name: "mealRoutine",
        label: "Please share your daily meal routine",
        type: "textarea",
        required: false,
        placeholder: "Describe your daily meal routine",
        width: "full",
      },
      {
        name: "dietarySupplements",
        label: "Do you consume any dietary supplements?",
        type: "textarea",
        required: false,
        placeholder: "List any dietary supplements you take",
        width: "full",
      },
    ],
  },
  {
    title: "Goals & Expectations",
    fields: [
      {
        name: "programExpectations",
        label: "What do you expect from your online personal training program?",
        type: "textarea",
        required: true,
        placeholder: "Describe your expectations",
        width: "full",
      },
      {
        name: "challenges",
        label:
          "What challenges do you face in maintaining a consistent diet and workout routine?",
        type: "textarea",
        required: false,
        placeholder: "Describe your challenges",
        width: "full",
      },
      {
        name: "additionalInfo",
        label: "Is there anything else that you would like to tell us?",
        type: "textarea",
        required: false,
        placeholder: "Share any additional information",
        width: "full",
      },
    ],
  },
];

const fields = formSections.map((field) => {
  return field.fields.length;
});

export const totalQuestions = fields.reduce((acc, item) => {
  return acc + item;
}, 0);
