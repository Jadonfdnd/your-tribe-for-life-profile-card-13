<script>
    let { data } = $props();
    const person = data.person;
</script>

<h1>{person.name}</h1>
<img src={person.avatar ?? '/placeholder.jpg'} alt={person.name} />
<p>{@html person.bio}</p>