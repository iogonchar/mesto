export const renderLoadingForm = (isLoading, buttonSubmit, mainText, loadingText) => {
  if (isLoading) {
    buttonSubmit.textContent = loadingText;
  } else {
    buttonSubmit.textContent = mainText;
  }
}
