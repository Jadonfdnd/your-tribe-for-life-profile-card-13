<script>
    import '../stylesheet.css';
    
    let { data } = $props();
    const person = data.person;

    const trackId1 = "1SOTqkhpIWoLX1AS9Y2RpU?si=157b2dedf290474e";
    const trackId2 = "47EiUVwUp4C9fGccaPuUCS?si=a8f2f33e39054022";
  

</script>

<svelte:head>
    <title>{person.name}</title>
</svelte:head>


<article>
  <h1>{person.name}</h1>  

  <figure> 
    <img src="https://fdnd.directus.app/assets/{person.mugshot}" alt={person.name} />
  </figure>

    <section class="media-carousel">
        <h2>Favorite songs</h2>

        <div class="carousel-track">
            <iframe
                id="song-1"
                src="https://open.spotify.com/embed/track/{trackId1}"
                height="232"
                allow="encrypted-media"
                title="Favoriete nummer 1"
            ></iframe>

            <iframe
                id="song-2"
                src="https://open.spotify.com/embed/track/{trackId2}"
                height="232"
                allow="encrypted-media"
                title="Favoriete nummer 2"
            ></iframe>
        </div>

        <div class="carousel-bolletjes">
            <a href="#song-1" class="bolletje" aria-label="Toon nummer 1"></a>
            <a href="#song-2" class="bolletje" aria-label="Toon nummer 2"></a>
        </div>
    </section>   

    <section class="covers-carousel">
        <h2>Favorite Movie & Game</h2>

        <div class="carousel-track">
            <img id="cover-1" src="/covers/the-last-of-us-2.jpg" alt="Cover van favoriete game" />
            <img id="cover-2" src="/covers/the-batman-2022.jpg" alt="Cover van favoriete film" />
        </div>

        <div class="carousel-bolletjes">
            <a href="#cover-1" class="bolletje" aria-label="Toon game"></a>
            <a href="#cover-2" class="bolletje" aria-label="Toon film"></a>
        </div>
    </section>  
    
    <section class="bio">
        <h2>Bio</h2>
        <p>{@html person.bio}</p>

        <button popovertarget="favorieten-popover">Favorieten</button>

        <div id="favorieten-popover" popover class="favorieten-popover">
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
        </div>
    </section>

</article>

<style>

    .media-carousel{
        h2{
            display: none;
        }
    }


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

    .media-carousel,
    .covers-carousel {
        display: flex;
        align-items: center;
        gap: 1em;
        background-color: var(--donkergrijs);
        border-radius: 12px;
        padding: 1em;
        min-width: 0;

    }

    .carousel-track {
        flex: 1;
        display: flex;
        gap: 1em;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        min-width: 0;
    }

    .carousel-track iframe {
        width: 100%;
        border: none;
        flex-shrink: 0;
        scroll-snap-align: start;
    }

    .covers-carousel .carousel-track img {
        border-radius: 8px;
        width: 8em;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        flex-shrink: 0;
        scroll-snap-align: start;
    }

    /* carousel track */

    .carousel-track {
        scrollbar-width: none;
    }

    .carousel-track::-webkit-scrollbar {
        display: none;
    }
    .carousel-track iframe,
    .covers-carousel .carousel-track img {
        scroll-snap-align: start;
        scroll-margin-left: 1em;
    }    

    .bolletje {
        width: 0.6em;
        height: 0.6em;
        border-radius: 50%;
        background-color: var(--lichtgrijs);
        display: inline-block;
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
        min-width: 0;
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

    h1 {
        display: none;
    }

    @media (width > 600px) {
        article {
            grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.5fr);
            grid-template-areas:
                "foto media"
                "foto covers"
                "bio bio";
        }

        figure {
            grid-area: foto;
            height: 100%;
        }

        figure img {
            height: 100%;
            aspect-ratio: auto;
        }

        .media-carousel {
            grid-area: media;
            max-height: 800%;
        }

        .covers-carousel {
            grid-area: covers;
        }

        .bio {
            grid-area: bio;
        }
    }   

    /* Hover over alle 4 blocks */
    figure,
    .media-carousel,
    .covers-carousel,
    .bio {
        transition: transform 0.2s ease;
    }

    details:hover, figure:hover,
    .media-carousel:hover,
    .covers-carousel:hover,
    .bio:hover {
        transform: scale(1.05);
    }

    /* hover over buttons en details */
    summary, button {
            transition: transform 0.2s ease;
        }    
    button:hover {
            transform: scale(1.5);
        }

        /* popover voor bio */
    .favorieten-popover {
        background-color: var(--donkergrijs);
        border: 1px solid var(--lichtgrijs);
        border-radius: 12px;
        padding: 1em;
        max-width: 24em;
        
    }      
    .bio {button{
            background-color: var(--lichtgrijs);
            border-radius: 12px;
            box-shadow: 0 4px 8px black;
        }
    }    
</style>