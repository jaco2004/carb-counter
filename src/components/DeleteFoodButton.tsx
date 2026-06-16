'use client'

export default function DeleteFoodButton({
    id,
}: {
    id: number
}) {
    async function handleDelete() {
        const confirmed = window.confirm(
            'Delete this food?'
        )

        if (!confirmed) return
        await fetch('/api/foods', {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id,
            }),
        })

        window.location.reload()
    }

    return (
        <button
            onClick={handleDelete}
            className="mt-2 rounded bg-red-500 px-3 py-1 text-white"
            >
                Delete
            </button>
    )
}