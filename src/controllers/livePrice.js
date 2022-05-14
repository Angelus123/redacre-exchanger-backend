import livePrices from "../models/livePrice.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js"
const getLivePrices = catchAsync(async (req, res, next) => {
 let livePrices="http://api.coinlayer.com/live?access_key=17aa584f3bc7942a109a233957d2d8ca"
  const usdData = await livePrices.find({});
  res.status(200).json({
    status: "success",
    results: usdData.length,
    data: {
      usdData,
    },
  });
});


const addLivePrice = catchAsync(async (req, res, next) => {
  let usdInfo = {};
  usdInfo.title = req.body.title;
  usdInfo.usd = req.body.usd;
  usdInfo.author = req.user.name;
  usdInfo.createdAt = new Date().toISOString();
  const newArticle = await livePrices.create(articleInfo);
  res.status(201).json({
    message: "Usd was successfully created",
    newUsd,
  });
});

const getLivePrice = catchAsync(async (req, res, next) => {
  const livePrice = await livePrices.findById(req.params.id);
  if (!livePrice) {
    return next(new AppError("No Usd found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
      Usd,
  });
});

//Update Helper
const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

//Update controll API
const updateLivePrice = catchAsync(async (req, res, next) => {
  let _id = { _id: req.params.id };
  const filterBody = filterObj(req.body, "imagesUrl", "title", "article");
  const updatedlivePrice = await livePricess.findByIdAndUpdate(_id, filterBody, {
    new: true,
    runValidators: true,
  });
  if (!updatedlivePrice) {
    return next(new AppError("No article found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      updatedlivePrice,
    },
  });
});


const deleteLivePrice = catchAsync(async (req, res, next) => {
  let query = { _id: req.params.id };
  const livePriceDeleted = await livePrices.findByIdAndDelete(query);
  if (!livePriceDeleted) {
    return next(new AppError("No usdDatafound with that ID", 404));
  }
  res.status(200).json({
    status: "Deleted Successfully",
    data: null,
  });
});

export { getLivePrices, getLivePrice, updateLivePrice, addLivePrice, deleteLivePrice};
