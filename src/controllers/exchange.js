import exchanges from "../models/exchange.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js"

const getExchanges = catchAsync(async (req, res, next) => {
  res.json(res.paginatedResults)
});

const addExchange = catchAsync(async (req, res, next) => {
  let exchangeInfo = {};
  exchangeInfo.type = req.body.type;
  exchangeInfo.status = req.body.status;
  exchangeInfo.from = req.body.from;
  exchangeInfo.to = req.body.to;
  exchangeInfo.amount1 = req.body.amount1;
  exchangeInfo.amount2 = req.body.amount2;
  exchangeInfo.createdAt = new Date().toISOString();
  const newExchange = await exchanges.create(exchangeInfo);
  res.status(201).json({
    message: "Exchange was successfully created",
    newExchange,
  });
});

const getExchange = catchAsync(async (req, res, next) => {
  const exchangedData = await exchanges.findById(req.params.id);
  if (!exchangedData) {
    return next(new AppError("No Exchange found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    exchangedData,
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
const updateExchange = catchAsync(async (req, res, next) => {
  let _id = { _id: req.params.id };
  const filterBody = filterObj(req.body, "type", "status", "");
  const updatedExchange = await exchanges.findByIdAndUpdate(_id, filterBody, {
    new: true,
    runValidators: true,
  });
  if (!updatedExchange) {
    return next(new AppError("No exchange found with that ID", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      updatedExchange,
    },
  });
});


const deleteExchange = catchAsync(async (req, res, next) => {
  let query = { _id: req.params.id };
  const exchangeDeleted = await exchanges.findByIdAndDelete(query);
  if (!exchangeDeleted) {
    return next(new AppError("No usdDatafound with that ID", 404));
  }
  res.status(200).json({
    message: "Exchange was successfully deleted",
    data: null,
  });
});

export { getExchanges, getExchange, updateExchange, addExchange, deleteExchange};
