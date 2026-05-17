const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-bukhari.json"
const placeholder = document.getElementById('hadith');
async function getHadith() {

    const response = await fetch(URL);

    const Raw_Data = await response.json();

    const all_hadiths = Raw_Data.hadiths;
    let Random_number = Math.floor(Math.random() * Raw_Data.hadiths.length)

    placeholder.textContent = all_hadiths[Random_number].text
}
document.addEventListener('DOMContentLoaded', () => {
    getHadith();
})

const button = document.getElementById('btn');

button.addEventListener('click', getHadith);
