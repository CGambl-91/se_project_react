import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({ clothingItems, handleCardClick, handleAddClick }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
        handleAddClick={handleAddClick}
      />
    </section>
  );
}

export default Profile;
