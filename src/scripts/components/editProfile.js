export function editProfile(inputNameFormProfile, inputDescriptionFormProfile, profileTitleEl, profileDescriptionEl) {
    profileTitleEl.textContent = inputNameFormProfile.value;
    profileDescriptionEl.textContent = inputDescriptionFormProfile.value;
}
