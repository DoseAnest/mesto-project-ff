export function editProfile(nameProfile, description, profileTitleEl, profileDescriptionEl) {
    profileTitleEl.textContent = nameProfile.value;
    profileDescriptionEl.textContent = description.value;
}
