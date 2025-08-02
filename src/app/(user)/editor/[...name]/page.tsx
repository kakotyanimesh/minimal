export default async function EditorPage({params}:{params : Promise<{name : string}>}) {
    const name = (await params).name
    return (
        <div>
            {name}
        </div>
    )
}