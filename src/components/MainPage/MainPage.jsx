import { lazy, Suspense, useContext, useEffect, useState } from "react";
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

function MainPage() {
  const currentUser = useContext(CurrentUserContext);
  const [mainPageData, setMainPageData] = useState({});
  const { articles, movies } = mainPageData;

  useEffect(() => {
    api.getMainPage(currentUser.city).then(setMainPageData);
  }, []);

  return (
    <main
      className={
        currentUser.isLoggedIn ? "main-grid main-grid_authorized" : "main-grid"
      }
    >
      {currentUser.isLoggedIn ? <EventCard isOnMain /> : <Description />}
      <CoverStory />
      <Paper />
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
        <Video />
      </Suspense>
      <QuestionList />
    </main>
  );
}

export default MainPage;
