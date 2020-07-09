const delForms = document.getElementsByName('delete-form');

delForms.forEach((el) => {
  el.addEventListener('submit', async (event) => {
    event.preventDefault();

    let deleteFetch = await fetch(event.target.action, {
      method: 'DELETE',
    });
    deleteFetch = await deleteFetch.text();

    if (deleteFetch === 'true') {
      const alumniCard = event.target.parentNode;

      alumniCard.remove();
    }
  });
});
