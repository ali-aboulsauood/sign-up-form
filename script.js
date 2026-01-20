const bodyRight = document.body.querySelector('.right');

const submitText = document.createElement('div');
submitText.innerHTML = 
`
<div class="submit-text">
    <p>
        Thank you for trying out my sign-up form design.
    </p>

    <p>
        I am <span class="highlighted">Ali Aboul-Sauood</span>, the creator of the sign-up form.
    </p>

    <ul>
        <li>
            <a href="https://www.github.com/ali-aboulsauood/sign-up-form" rel="noopener noreferrer" target="_blank">
                Visit the project's GitHub repository
            </a>
        </li>

        <li>
            <a href="https://www.github.com/ali-aboulsauood/" rel="author noopener noreferrer" target="_blank">
                Visit my GitHub profile
            </a>
        </li>                    
    </ul>
</div>
`

document.addEventListener('submit', (event) => {
    event.preventDefault();

    bodyRight.replaceChildren();

    bodyRight.appendChild(submitText);
});

bodyRight.addEventListener('dblclick', (event) => {
    const target = event.target;

    if (target.tagName !== 'INPUT')
        return;

    if (target.type === 'password') {
        target.value = 'password🤡';

        return;
    };

    target.value = target.getAttribute('placeholder');
});
