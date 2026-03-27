import Navbar from "../../components/Navbar";
import { useState } from "react";
import axios from "axios";



const SellDevice = () => {

  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
 
  const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {

    let temp = {};

    if (!formData.name) temp.name = "Required";

    if (!formData.email) {
      temp.email = "Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      temp.email = "Invalid Email";
    }

    if (!formData.phone) {
      temp.phone = "Required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      temp.phone = "Invalid Phone";
    }

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

//const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {

    await axios.post(
      "https://pratham-computech.onrender.com/api/sell-device",
      formData,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    alert("Submitted Successfully");

  } catch (error) {

    console.log(error);

  }

  setLoading(false);
};

  


  return (
    <div>

      <Navbar />

      <div className="p-10 bg-gray-50 min-h-screen">

        <h1 className="text-3xl font-bold mb-8">
          Sell Your Device
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Contact Info */}
          <div className="bg-white p-6 rounded shadow">

            <h2 className="text-xl font-semibold mb-4">
              Contact Information
            </h2>

            <div className="grid grid-cols-3 gap-4">

              <div>
                <label>Name <span className="text-red-500">*</span></label>
                <input
                  name="name"
                  className="border p-2 w-full"
                  onChange={handleChange}
                />
                <p className="text-red-500 text-sm">{errors.name}</p>
              </div>

              <div>
                <label>Email <span className="text-red-500">*</span></label>
                <input
                  name="email"
                  className="border p-2 w-full"
                  onChange={handleChange}
                />
                <p className="text-red-500 text-sm">{errors.email}</p>
              </div>

              <div>
                <label>Phone <span className="text-red-500">*</span></label>
                <input
                  name="phone"
                  className="border p-2 w-full"
                  onChange={handleChange}
                />
                <p className="text-red-500 text-sm">{errors.phone}</p>
              </div>

            </div>

          </div>

          {/* Basic Info */}

          <div className="bg-white p-6 rounded shadow">

            <h2 className="text-xl font-semibold mb-4">
              Basic Laptop Information
            </h2>

            <div className="grid grid-cols-3 gap-4">

              <div>
                <label>Brand <span className="text-red-500">*</span></label>
                <select name="brand" className="border p-2 w-full" onChange={handleChange}>
                  <option value="">Select Brand</option>
                  <option>Dell</option>
                  <option>HP</option>
                  <option>Lenovo</option>
                  <option>Apple</option>
                  <option>Asus</option>
                  <option>Acer</option>
                </select>
              </div>

              <div>
                <label>Laptop Type</label>
                <select name="type" className="border p-2 w-full" onChange={handleChange}>
                  <option>Normal Laptop</option>
                  <option>Gaming Laptop</option>
                  <option>Ultrabook</option>
                  <option>2-in-1</option>
                </select>
              </div>

              <div>
                <label>RAM</label>
                <select name="ram" className="border p-2 w-full" onChange={handleChange}>
                  <option>4GB</option>
                  <option>8GB</option>
                  <option>16GB</option>
                  <option>32GB</option>
                </select>
              </div>

            </div>

          </div>

          {/* Performance */}

          <div className="bg-white p-6 rounded shadow">

            <h2 className="text-xl font-semibold mb-4">
              Performance Specifications
            </h2>

            <div className="grid grid-cols-3 gap-4">

              <select name="processor" className="border p-2" onChange={handleChange}>
                <option>Processor</option>
                <option>Intel i3</option>
                <option>Intel i5</option>
                <option>Intel i7</option>
                <option>Ryzen 5</option>
                <option>Ryzen 7</option>
              </select>

              <select name="storage" className="border p-2" onChange={handleChange}>
                <option>Storage</option>
                <option>256GB SSD</option>
                <option>512GB SSD</option>
                <option>1TB SSD</option>
              </select>

              <select name="gpu" className="border p-2" onChange={handleChange}>
                <option>Graphics</option>
                <option>Integrated</option>
                <option>Nvidia</option>
                <option>AMD</option>
              </select>

            </div>

          </div>

          {/* Display Information */}

            <div className="bg-white p-6 rounded shadow">

            <h2 className="text-xl font-semibold mb-4">
                Display Information
            </h2>

            <div className="grid grid-cols-4 gap-4">

                <div>
                <label>Screen Size</label>
                <select name="screenSize" className="border p-2 w-full" onChange={handleChange}>
                    <option>Select</option>
                    <option>13 inch</option>
                    <option>14 inch</option>
                    <option>15.6 inch</option>
                    <option>16 inch</option>
                    <option>17 inch</option>
                </select>
                </div>

                <div>
                <label>Resolution</label>
                <select name="resolution" className="border p-2 w-full" onChange={handleChange}>
                    <option>Select</option>
                    <option>HD</option>
                    <option>Full HD</option>
                    <option>2K</option>
                    <option>4K</option>
                </select>
                </div>

                <div>
                <label>Touchscreen</label>
                <select name="touchscreen" className="border p-2 w-full" onChange={handleChange}>
                    <option>Select</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                </div>

                <div>
                <label>Display Type</label>
                <select name="displayType" className="border p-2 w-full" onChange={handleChange}>
                    <option>Select</option>
                    <option>IPS</option>
                    <option>OLED</option>
                    <option>LCD</option>
                </select>
                </div>

            </div>

            </div>

            {/* Condition Details */}

<div className="bg-white p-6 rounded shadow">

  <h2 className="text-xl font-semibold mb-4">
    Condition Details
  </h2>

  <div className="grid grid-cols-4 gap-4">

    <div>
      <label>Physical Condition</label>
      <select name="physicalCondition" className="border p-2 w-full" onChange={handleChange}>
        <option>Select</option>
        <option>Like New</option>
        <option>Good</option>
        <option>Average</option>
        <option>Damaged</option>
      </select>
    </div>

    <div>
      <label>Scratches / Dents</label>
      <select name="scratches" className="border p-2 w-full" onChange={handleChange}>
        <option>Select</option>
        <option>No</option>
        <option>Minor</option>
        <option>Major</option>
      </select>
    </div>

    <div>
      <label>Keyboard Condition</label>
      <select name="keyboardCondition" className="border p-2 w-full" onChange={handleChange}>
        <option>Select</option>
        <option>Excellent</option>
        <option>Good</option>
        <option>Average</option>
        <option>Not Working</option>
      </select>
    </div>

    <div>
      <label>Trackpad Condition</label>
      <select name="trackpadCondition" className="border p-2 w-full" onChange={handleChange}>
        <option>Select</option>
        <option>Excellent</option>
        <option>Good</option>
        <option>Average</option>
        <option>Not Working</option>
      </select>
    </div>

    <div>
      <label>Screen Condition</label>
      <select name="screenCondition" className="border p-2 w-full" onChange={handleChange}>
        <option>Select</option>
        <option>Excellent</option>
        <option>Good</option>
        <option>Average</option>
        <option>Dead Pixels</option>
        <option>Cracked</option>
      </select>
    </div>

  </div>

</div>


{/* Battery Information */}

<div className="bg-white p-6 rounded shadow">

  <h2 className="text-xl font-semibold mb-4">
    Battery Information
  </h2>

  <div className="grid grid-cols-3 gap-4">

    <div>
      <label>Battery Health</label>
      <select name="batteryHealth" className="border p-2 w-full" onChange={handleChange}>
        <option>Select</option>
        <option>Excellent</option>
        <option>Good</option>
        <option>Average</option>
        <option>Poor</option>
      </select>
    </div>

    <div>
      <label>Battery Backup</label>
      <select name="batteryBackup" className="border p-2 w-full" onChange={handleChange}>
        <option>Select</option>
        <option>Less than 1 Hour</option>
        <option>1-2 Hours</option>
        <option>2-4 Hours</option>
        <option>More than 4 Hours</option>
      </select>
    </div>

    <div>
      <label>Battery Replaced</label>
      <select name="batteryReplaced" className="border p-2 w-full" onChange={handleChange}>
        <option>Select</option>
        <option>Yes</option>
        <option>No</option>
      </select>
    </div>

  </div>

</div>

{/* Accessories Available */}

<div className="bg-white p-6 rounded shadow">

  <h2 className="text-xl font-semibold mb-4">
    Accessories Available
  </h2>

  <div className="grid grid-cols-4 gap-4">

    <select name="charger" className="border p-2" onChange={handleChange}>
      <option>Original Charger</option>
      <option>Yes</option>
      <option>No</option>
    </select>

    <select name="box" className="border p-2" onChange={handleChange}>
      <option>Original Box</option>
      <option>Yes</option>
      <option>No</option>
    </select>

    <select name="bill" className="border p-2" onChange={handleChange}>
      <option>Bill / Invoice</option>
      <option>Yes</option>
      <option>No</option>
    </select>

    <select name="warranty" className="border p-2" onChange={handleChange}>
      <option>Warranty Remaining</option>
      <option>Yes</option>
      <option>No</option>
    </select>

  </div>

</div>

{/* Upgrade Information */}

<div className="bg-white p-6 rounded shadow">

  <h2 className="text-xl font-semibold mb-4">
    Upgrade Information
  </h2>

  <div className="grid grid-cols-4 gap-4">

    <select name="ramUpgrade" className="border p-2" onChange={handleChange}>
      <option>RAM Upgraded</option>
      <option>Yes</option>
      <option>No</option>
    </select>

    <select name="ssdUpgrade" className="border p-2" onChange={handleChange}>
      <option>SSD Upgraded</option>
      <option>Yes</option>
      <option>No</option>
    </select>

    <select name="batteryUpgrade" className="border p-2" onChange={handleChange}>
      <option>Battery Replaced</option>
      <option>Yes</option>
      <option>No</option>
    </select>

    <input 
      name="hardwareChange"
      placeholder="Other Hardware Change"
      className="border p-2"
      onChange={handleChange}
    />

  </div>

</div>




          {/* Upload */}

          <div className="bg-white p-6 rounded shadow">

  <h2 className="text-xl font-semibold mb-4">
    Upload Images
  </h2>

  <input
    type="file"
    multiple
    onChange={(e) => setImages(Array.from(e.target.files))}
    className="border p-3 w-full"
  />

  <p className="text-sm text-gray-500 mt-2">
    You may also upload images to Google Drive and paste link below
  </p>

  <input
    name="driveLink"
    placeholder="Google Drive Link (Optional)"
    className="border p-3 w-full mt-2"
    onChange={handleChange}
  />

</div>

          <button 
  type="submit"
  disabled={loading}
  className="
    bg-orange-500 
    hover:bg-orange-600 
    text-white 
    px-8 
    py-3 
    rounded 
    transition 
    duration-300 
    font-semibold
    shadow-md
    hover:shadow-lg
    disabled:opacity-50
  "
>
  {loading ? "Submitting..." : "Submit For Review"}
</button>

        </form>

      </div>

    </div>
  );
};

export default SellDevice;