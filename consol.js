const setTitle = (newTitle) => {
    const titleElement = document.getElementById('page-title');
    titleElement.textContent = newTitle || 'Welcome to My Page';
};

const setDescription = (newDescription) => {
    const descriptionElement = document.getElementById('page-description');
    descriptionElement.textContent = newDescription || 'This is a customizable description.';
};

const setBackgroundColor = (color) => {
    document.body.style.backgroundColor = color || '';
};

const setFontColor = (color) => {
    document.body.style.color = color || '';
};

const setTheme = (theme) => {
    document.body.classList.remove('light-theme', 'dark-theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else if (theme === 'light') {
        document.body.classList.add('light-theme');
    }
};

// For easy testing, you can expose the functions to the console
window.setTitle = setTitle;
window.setDescription = setDescription;
window.setBackgroundColor = setBackgroundColor;
window.setFontColor = setFontColor;
window.setTheme = setTheme;