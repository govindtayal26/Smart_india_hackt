// Dummy data for demonstration purposes
const dummyData = [
    {
        symptoms: "Burning sensation in the chest, sour taste in the mouth, heartburn",
        disease: "Acidity",
        solution: "Diet modification, herbal remedies",
        medicine: "Triphala, amalaki, ginger, cumin"
    },
    {
        symptoms: "Pimples, blackheads, whiteheads, cysts on the skin",
        disease: "Acne",
        solution: "Detoxification, herbal remedies, topical treatments",
        medicine: "Neem, turmeric, aloe vera"
    },
    // Add more dummy data here
    {
        symptoms: "Memory loss, confusion, difficulty thinking, difficulty speaking, difficulty performing daily tasks",
        disease: "Alzheimer's disease",
        solution: "Herbal remedies, brain exercises",
        medicine: "Brahmi, shankhapushpi, ashwagandha"
    },
    {
        symptoms: "Fatigue, pale skin, shortness of breath, dizziness, headache",
        disease: "Anemia",
        solution: "Diet modification, herbal remedies",
        medicine: "Iron supplements, amla, beetroot"
    },
    {
        symptoms: "Insomnia, fatigue, headaches, muscle tension, restlessness",
        disease: "Anxiety",
        solution: "Meditation, yoga, herbal remedies",
        medicine: "Ashwagandha, brahmi, shankhapushpi"
    },
    {
        symptoms: "Joint pain, inflammation, stiffness, swelling",
        disease: "Arthritis",
        solution: "Diet modification, herbal remedies ",
       
        medicine: "Ashwagandha, boswellia, gingeTriphala, amalaki, ginger, cumin  r"
      
    },
    {
      symptoms: "Burning sensation in the chest, sour taste in the mouth, heartburn",
  
      disease: "Arthritis",
      solution: "Herbal remedies, massage, physical therapy",
      medicine: "Ashwagandha, boswellia, ginger"
  },
    // Add more diseases and symptoms here
];

document.addEventListener("DOMContentLoaded", () => {
    const symptomsInput = document.getElementById("symptomsInput");
    const searchbutton = document.getElementById("searchbutton");
    const resultsSection = document.getElementById("results");

    searchbutton.addEventListener("click", () => {
        const userSymptoms = symptomsInput.value.trim().toLowerCase();
        const matchingData = dummyData.filter(entry =>
            userSymptoms.split(',').every(symptom =>
                entry.symptoms.toLowerCase().includes(symptom.trim())
            )
        );

        displayResults(matchingData);
    });

    function displayResults(data) {
        resultsSection.innerHTML = "";
        if (data.length === 0) {
            resultsSection.innerHTML = "<p>No matching results found.</p>";
        } else {
            data.forEach(entry => {
                const resultElement = document.createElement("div");
                resultElement.innerHTML = `<strong>Symptoms:</strong> ${entry.symptoms}<br>
                                           <strong>Disease:</strong> ${entry.disease}<br>
                                           <strong>Solution:</strong> ${entry.solution}<br>
                                           <strong>Ayurvedic Medicine:</strong> ${entry.medicine}`;
                resultsSection.appendChild(resultElement);
            });
        }
    }
});