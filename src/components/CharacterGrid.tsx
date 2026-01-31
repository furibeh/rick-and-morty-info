import {getCharacters} from "@/api/characters"
import { useQuery } from "@tanstack/react-query"
import ChromaGrid from "./ChromaGrid"
import Spinner from "./Spinner"

export default function CharacterGrid() {
	const { data, isLoading, error } = useQuery({
		queryKey: ["characters"],
		queryFn: getCharacters,
		staleTime: 1000 * 60 * 10
	})

	if (isLoading) {
		return (
			<div className="relative z-10 flex flex-col items-center gap-4 text-white my-10">
				<Spinner />
				<p className="text-xl text-neutral-300">
					Loading characters...
				</p>
			</div>
		)
	}

	if (error) {
		return (
			<p>SE CAYO EL SISTEMA 😔: {error.message}</p>
		)
	}

	const characters = data.results
	
	const characterItems = characters.map(char => {
		return {
		image: char.image,
		title: char.name,
		subtitle: char.species,
		url: `/character/${char.id}`
	}})

	return (
		<ChromaGrid items={characterItems}/>
	)
}