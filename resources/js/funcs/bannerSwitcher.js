/**
 * Переключатель баннеров
 * @param banners
 * @param currentIndex
 * @param setCurrentIndex
 * @param setCurrentBanner
 * @param delay
 * @returns {(function(null=): void)|*} переключатель
 */
export const bannerSwitcher = (banners, currentIndex, setCurrentIndex, setCurrentBanner, delay = 5000) => {
    let timer;

    const startTimer = () => {
        timer = setTimeout(() => {
            const newIndex = currentIndex + 1 !== banners.length ? currentIndex + 1 : 0;
            setCurrentIndex(newIndex);
            setCurrentBanner(banners[newIndex]);
        }, delay);
    }

    return (switchTo = null) => {
        if (switchTo !== null) {
            window.clearTimeout(timer);
            setCurrentIndex(switchTo);
            setCurrentBanner(banners[switchTo]);
        }
        startTimer();
    }
}