export async function load() {
    const res = await fetch("https://fdnd.directus.app/items/person?fields=*&filter[github_handle][_eq]=jadonfdnd");
    const data = await res.json();

    return {
        person: data.data[0]
    };
}