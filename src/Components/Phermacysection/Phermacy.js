import React from 'react';
import './pharmacy.scss'
const Phermacy = () => {
    return (
        <div>
            
<div className='pharmacy_main_container'>
<div><h1 className='text-center text-2xl font-[400]'>PHARMACY</h1></div>
  

</div>

<div className='search_ar_header flex justify-end max-w-[70%] mx-auto'>

<div class="font-sans text-black border-[1px] border-black bg-white rounded-2xl flex items-center justify-center">
  <div class="border rounded-2xl overflow-hidden flex">
    <input type="text rounded-2xl" class="px-4 py-2" placeholder="Search..."/>
    <button class="flex items-center justify-center px-4 border-l">
      <svg class="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
    </button>
  </div>
</div>

    </div>
{/* ==================================================== */}

<div class="tabs_section_main_container  flex justify-center items-center pt-5 ">
        <div class="tabs">
          <div class="tabs__content">
            <div class="tab_back_imege">
              <p>Ovarian</p>
            </div>
            <div class="tab_back_imege">
              <p>Ovarian</p>
            </div>
            <div class="tab_back_imege">
              <p>Ovarian</p>
            </div>
            <div class="tab_back_imege">
              <p>Ovarian</p>
            </div>
            <div class="tab_back_imege">
              <p>Ovarian</p>
            </div>
            <div class="tab_back_imege">
              <p>Ovarian</p>
            </div>
            <div class="tab_back_imege">
              <p>Ovarian</p>
            </div>
            <div class="tab_back_imege">
              <p>Ovarian</p>
            </div>
            <div class="tab_back_imege">
              <p>Ovarian</p>
            </div>
          </div>

          <input
            type="radio"
            class="tabs__radio"
            name="tabs-example"
            id="tab2"
            checked
          />
          <label for="tab2" class="tabs__label">
            Endoscopy
          </label>

          <input
            type="radio"
            class="tabs__radio"
            name="tabs-example"
            id="tab3"
            checked
          />
          <label for="tab3" class="tabs__label">
            Endoscopy
          </label>

          <input
            type="radio"
            class="tabs__radio"
            name="tabs-example"
            id="tab4"
            checked
          />
          <label for="tab4" class="tabs__label">
            Endoscopy
          </label>

          <input
            type="radio"
            class="tabs__radio"
            name="tabs-example"
            id="tab5"
            checked
          />
          <label for="tab5" class="tabs__label">
            Endoscopy
          </label>
          <input
            type="radio"
            class="tabs__radio"
            name="tabs-example"
            id="tab6"
            checked
          />
          <label for="tab6" class="tabs__label">
            Endoscopy
          </label>
          <input
            type="radio"
            class="tabs__radio"
            name="tabs-example"
            id="tab7"
            checked
          />
          <label for="tab7" class="tabs__label">
            Endoscopy
          </label>
          <input
            type="radio"
            class="tabs__radio"
            name="tabs-example"
            id="tab8"
            checked
          />
          <label for="tab8" class="tabs__label">
            Endoscopy
          </label>
          <input
            type="radio"
            class="tabs__radio"
            name="tabs-example"
            id="tab9"
            checked
          />
          <label for="tab9" class="tabs__label">
            Endoscopy
          </label>
          <input
            type="radio"
            class="tabs__radio"
            name="tabs-example"
            id="tab10"
            checked
          />
          <label for="tab10" class="tabs__label">
            Endoscopy
          </label>
          <input
            type="radio"
            class="tabs__radio"
            name="tabs-example"
            id="tab11"
            checked
          />
          <label for="tab11" class="tabs__label">
            Endoscopy
          </label>
        </div>
      </div>
    

        </div>
    );
};

export default Phermacy;