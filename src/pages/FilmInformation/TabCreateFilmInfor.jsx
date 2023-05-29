import React from "react";
import RenderForm from "../../components/RenderForm";
import FORMS from '../../config/form.json'
const TabCreateFilmInfor = () => {
  return <RenderForm mode={'create'} formFormat={FORMS.filmInformations} />
};

export default TabCreateFilmInfor;
