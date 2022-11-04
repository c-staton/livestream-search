import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SearchForm from "../common/SearchForm";
import StreamFeed from "../common/StreamFeed";
import "./styles/StreamSearch.css";
import LoadingAnimation from "../common/LoadingAnimation";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { searchPlatforms } from "../features/streams/streamsSlice";

const StreamSearch = () => {
	const dispatch = useDispatch();
	const { isLoading } = useSelector((store) => store.streams);

	const isMobile = useMediaQuery({
		query: "(max-width: 1069px)",
	});

	const { game } = useParams();

	useEffect(() => {
		if (game) {
			dispatch(searchPlatforms(game));
		}
	}, [game]);

	return (
		<div className="stream-search">
			<div className="stream-search__content">
				<div className="stream-search__block">
					<SearchForm />
				</div>
				{isLoading ? (
					<LoadingAnimation />
				) : (
					<>
						<StreamFeed />
						{isMobile && (
							<span className="logo">
								<a href="/">
									<span id="livestreams">Livestream</span>Search
								</a>
							</span>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default StreamSearch;
