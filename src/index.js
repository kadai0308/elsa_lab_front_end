import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Template from './Template/Template'
import Home from './Home/Home'
import Members from './Members/Members'
import Courses from './Courses/Courses'
import courseFrontShow from './Courses/Show/Show'
import fileShow from './Courses/fileShow/fileShow'
import Publications from './Publications/Publications'
import Contact from './Contact/Contact'
import Login from './Login/Login'
import Logout from './Logout/Logout'
import publicationIndex from './Management/Publications/Index/Index'
import publicationNew from './Management/Publications/New/New'
import publicationShow from './Management/Publications/Show/Show'
import publicationEdit from './Management/Publications/Edit/Edit'
import userIndex from './Management/Users/Index/Index'
import userNew from './Management/Users/New/New'
import userShow from './Management/Users/Show/Show'
import courseIndex from './Management/Courses/Index/Index'
import courseNew from './Management/Courses/New/New'
import courseEdit from './Management/Courses/Edit/Edit'
import courseShow from './Management/Courses/Show/Show'
import contentNew from './Management/Courses/Content/New/New'
import contentShow from './Management/Courses/Content/Show/Show'
import contentEdit from './Management/Courses/Content/Edit/Edit'
import lectureNew from './Management/Courses/Content/Lecture/New/New'
import lectureShow from './Management/Courses/Content/Lecture/Show/Show'
import lectureEdit from './Management/Courses/Content/Lecture/Edit/Edit'
import './index.css';

// router setting
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Template}>
      <IndexRoute component={Home} />
      <Route path="/members" component={Members} />
      <Route path="/courses" component={Courses} />
      <Route path="/courses(/:course_id)/contents(/:content_id)" component={courseFrontShow} />
      <Route path="/courses(/:course_id)/contents(/:content_id)/lectures(/:lecture_id)/files(/:file_id)" component={fileShow} />
      <Route path="/publications" component={Publications} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/management" component={userIndex} />
      <Route path="/management/publications" component={publicationIndex} />
      <Route path="/management/publications/new" component={publicationNew} />
      <Route path="/management/publications/:publication_id" component={publicationShow} />
      <Route path="/management/publications/:publication_id/edit" component={publicationEdit} />
      <Route path="/management/users" component={userIndex} />
      <Route path="/management/user/new" component={userNew} />
      <Route path="/management/user/:user_id" component={userShow} />
      <Route path="/management/courses" component={courseIndex} />
      <Route path="/management/course/new" component={courseNew} />
      <Route path="/management/courses/:course_id/edit" component={courseEdit} />
      <Route path="/management/courses/:course_id" component={courseShow} />
      <Route path="/management/courses/:course_id/contents/new" component={contentNew} />
      <Route path="/management/courses(/:course_id)/contents(/:content_id)" component={contentShow} />
      <Route path="/management/courses(/:course_id)/contents(/:content_id)/edit" component={contentEdit} />
      <Route path="/management/courses(/:course_id)/contents(/:content_id)/lectures/new" component={lectureNew} />
      <Route path="/management/courses(/:course_id)/contents(/:content_id)/lectures(/:lecture_id)/edit" component={lectureEdit} />
      <Route path="/management/courses(/:course_id)/contents(/:content_id)/lectures(/:lecture_id)" component={lectureShow} />
    </Route>
  </Router>
), document.getElementById('app'))