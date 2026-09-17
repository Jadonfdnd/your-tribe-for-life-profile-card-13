<script>
    import '../stylesheet.css';
    
    let { data } = $props();
    const person = data.person;

    const trackId1 = "1SOTqkhpIWoLX1AS9Y2RpU?si=157b2dedf290474e";
    const trackId2 = "1SOTqkhpIWoLX1AS9Y2RpU?si=157b2dedf290474e";
</script>

<svelte:head>
    <title>{person.name}</title>
</svelte:head>


<article>
  <h1>{person.name}</h1>  

  <figure> 
    <img src="https://fdnd.directus.app/assets/{person.mugshot}" alt={person.name} />
    <figcaption>{person.name}</figcaption>
  </figure>

    <section class="media-carousel">
        <h2>Favorite songs</h2>
        <button class="pijl-links">◀</button>

        <div class="carousel-track">
            <iframe
                src="https://open.spotify.com/embed/track/{trackId1}"
                height="152"
                allow="encrypted-media"
                title="Favoriete nummer 1"
            ></iframe>

            <iframe
                src="https://open.spotify.com/embed/track/{trackId2}"
                height="152"
                allow="encrypted-media"
                title="Favoriete nummer 2"
            ></iframe>
        </div>

        <button class="pijl-rechts">▶</button>

        <div class="carousel-bolletjes">
            <span class="bolletje actief"></span>
            <span class="bolletje"></span>
        </div>
    </section>

  <section class="covers-carousel">
    <h2>Favorite Movie & Game</h2>
    <button class="pijl-links">◀</button>

    <div class="carousel-track">
        <img src="/covers/fav-game.jpg" alt="Cover van favoriete game" />
        <img src="/covers/fav-movie.jpg" alt="Cover van favoriete film" />
    </div>

    <button class="pijl-rechts">▶</button>


    </section>
    
    <section class="bio">
        <h2>Bio</h2>
        <p>{@html person.bio}</p>

        <details>
            <summary>Favoriete dier</summary>
            <p>{person.fav_animal}</p>
        </details>

        <details>
            <summary>Favoriet seizoen</summary>
            <p>{person.fav_season}</p>
        </details>

        <details>
            <summary>Favoriete muzieknummer</summary>
            <p>{person.fav_song}</p>
        </details>

        <details>
            <summary>Favoriete muziekgenre</summary>
            <p>{person.fav_music_genre}</p>
        </details>

        <details>
            <summary>Favoriete game</summary>
            <p>{person.fav_game}</p>
        </details>

        <details>
            <summary>Favoriete fruit</summary>
            <p>{person.fav_fruit}</p>
        </details>

        <details>
            <summary>Favoriete soep</summary>
            <p>{person.fav_soup}</p>
        </details>

        <details>
            <summary>Favoriete film</summary>
            <p>{person.fav_movie}</p>
        </details>
    </section>

</article>

<style>
    article {
        max-width: 60em;
        margin-inline: auto;
        padding: 2em;
        display: grid;
        gap: 2em;
    }

    figure {
        margin: 0;
        text-align: center;
    }

    figure img {
        border-radius: 12px;
        width: 100%;
        aspect-ratio: 3 / 4;
        object-fit: cover;
    }

    figcaption {
        margin-top: 0.5em;
        font-family: var(--font-hoofdletters);
        font-size: 1.2rem;
    }

    .media-carousel,
    .covers-carousel {
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 1em;
        background-color: var(--donkergrijs);
        border-radius: 12px;
        padding: 1em;
    }

    .carousel-track {
        flex: 1;
        display: flex;
        gap: 1em;
        overflow: hidden;
    }

    .carousel-track iframe {
        width: 100%;
        border: none;
    }

    .covers-carousel .carousel-track img {
        border-radius: 8px;
        width: 8em;
        aspect-ratio: 3 / 4;
        object-fit: cover;
    }

    .media-carousel button,
    .covers-carousel button {
        color: var(--wit);
        font-size: 1.5rem;
        flex-shrink: 0;
    }

    .carousel-bolletjes {
        display: flex;
        gap: 0.5em;
        justify-content: center;
        margin-top: 0.5em;
    }

    .bolletje {
        width: 0.6em;
        height: 0.6em;
        border-radius: 50%;
        background-color: var(--lichtgrijs);
        display: inline-block;
    }

    .bolletje.actief {
        background-color: var(--wit);
    }

    .bio {
        background-color: var(--donkergrijs);
        color: var(--wit);
        border-radius: 12px;
        padding: 1.5em;
    }

    details {
        background-color: var(--lichtgrijs);
        color: var(--zwart);
        border-radius: 8px;
        margin-bottom: 0.75em;
        padding: 0.75em 1em;
    }

    summary {
        font-weight: bold;
        cursor: pointer;
    }

    details p {
        margin: 0.5em 0 0;
    }

    .bio h2,
    .bio h3 {
        font-family: var(--font-hoofdletters);
        margin: 0 0 0.5em;
    }

    .bio h3 {
        font-size: 1rem;
        margin-top: 1.5em;
    }
</style>