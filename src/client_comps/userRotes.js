import React from "react"
import { Route } from "react-router-dom"
export const adminRoutes = () => {
    return (
      <React.Fragment>
        <Route path="/*" element={<ClientNav />} />
        <Route path="/user" element={<Home />} />
        <Route path="/user/addComment" element={<AddComment />} />
        <Route path="/user/logOut" element={<LogOut />} />
        <Route path="/user/personalArea" element={<PersonalArea />} />
        <Route path="/user/personalArea/edit" element={<EditUser />} />
        <Route path="/user/personalArea/chooseTrip" element={<ChooseTrip />} />
        <Route path="/user/personalArea/result" element={<ResultTrips />} />
        {/* <Route path="/user/personalArea/blogs" element={<Blogs />} /> */}
        {/* <Route path="/user/personalArea/trips" element={<Trips />} /> */}
      </React.Fragment>
    )
  }