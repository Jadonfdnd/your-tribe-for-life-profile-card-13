<script>

    import '../stylesheet.css';

    let { data } = $props();
    const person = data.person;

    const trackId1 = "1SOTqkhpIWoLX1AS9Y2RpU?si=157b2dedf290474e";
    const trackId2 = "1SOTqkhpIWoLX1AS9Y2RpU?si=157b2dedf290474e";
</script>

<h1>{person.name}</h1>


<article>

  <figure> 
    <img src="https://fdnd.directus.app/assets/{person.mugshot}" alt={person.name} />
    <figcaption>{person.name}</figcaption>
  </figure>

    <section class="media-carousel">
        <button class="pijl-links">◀</button>

        <div class="carousel-track">
            <iframe
                src="https://open.spotify.com/embed/track/{trackId1}"
                width="100%"
                height="152"
                frameborder="0"
                allow="encrypted-media"
                title="Favoriete nummer 1"
            ></iframe>

            <iframe
                src="https://open.spotify.com/embed/track/{trackId2}"
                width="100%"
                height="152"
                frameborder="0"
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
    <button class="pijl-links">◀</button>

    <div class="carousel-track">
        <img src="/covers/fav-game.jpg" alt="Cover van favoriete game" />
        <img src="/covers/fav-movie.jpg" alt="Cover van favoriete film" />
    </div>

    <button class="pijl-rechts">▶</button>


    </section>
    
    <section class="bio">
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

</style>