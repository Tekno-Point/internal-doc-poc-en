export function selectTag(div) {
    console.log(div.querySelector('.nav-brand .select-wrapper ul'));
    div.querySelector('.nav-brand .select-wrapper ').addEventListener('click', function () {
        const ulElement = div.querySelector('.nav-brand .select-wrapper ul');
        // Toggle the display style between 'none' and 'block'
        if (ulElement.style.display === 'block') {
            ulElement.style.display = 'none'; // Close it
        } else {
            ulElement.style.display = 'block'; // Open it
        }
    });
}