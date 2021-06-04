import { lazy, Suspense, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CoverStory from "./CoverStory";
import DescribeArticle from "./DescribeArticle";
import Description from "./Description";
import Paper from "./Paper";
import PosterList from "./PosterList";
import QuestionList from "./QuestionList";
import api from "../../utils/api/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import EventCard from "../EventCard/EventCard";

const Video = lazy(() => import("./Video"));
const SocialIframe = lazy(() => import("./SocialIframe"));

function MainPage({ onZoomEvent, onSign, events }) {
  const currentUser = useContext(CurrentUserContext);
  const [mainPageData, setMainPageData] = useState({});
  const { articles, movies, history, place, video, event, questions } =
    mainPageData;

  useEffect(() => {
    api.getMainPage(currentUser.city).then(setMainPageData);
  }, []);

  return (
    <main
      className={
        currentUser.isLoggedIn ? "main-grid main-grid_authorized" : "main-grid"
      }
    >
      {currentUser.isLoggedIn ? (
        <EventCard
          isOnMain
          event={events.find((item) => item.id === event.id)}
          onZoomEvent={onZoomEvent}
          onSign={onSign}
        />
      ) : (
        <Description />
      )}
      <CoverStory history={history} />
      <Paper place={place} />
      {articles &&
        articles.map((article, i) => (
          <DescribeArticle
            key={article.id}
            color={article.color}
            title={article.title}
            arrayIndex={i}
          />
        ))}
      <PosterList movies={movies} />
      <Suspense fallback={<div>Загрузка...</div>}>
        <SocialIframe />
        <Video video={video} />
      </Suspense>
      <QuestionList questions={questions} />
    </main>
  );
}

MainPage.propTypes = {
  onSign: PropTypes.func.isRequired,
  onZoomEvent: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  events: PropTypes.array.isRequired,
};

export default MainPage;
