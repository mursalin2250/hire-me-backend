import companyModel from "./company.model.js";

export const createCompanyService = async (data) => {

    const company = await companyModel.findOne({title: data.title});
    if(company){
        throw new Error("Company already Exists!");
    }
    const newCompany = await companyModel.create(data);
    return newCompany;
}

export const getCompanyService = async (data) => {
    const company = await companyModel.findOne({_id: data.id}).select("-__v").populate("job");
    if(!company) {
        throw new Error("No company found!");
    };

    return company;
}

export const getAllCompanyService = async () => {
    const company = await companyModel.find().select("-__v");
    if(!company) {
        throw new Error("Add companies to view them.");
    }
    return company;
}

export const updateCompanyService = async (filter, data) => {
    console.log(filter.id);
    const company = await companyModel.findOneAndUpdate({_id: filter.id}, data, {new: true});
    if(!company) {
        throw new Error("No company found!")
    };

    return company;
}

export const deleteCompanyService = async (filter) => {
    const company = await companyModel.findOneAndDelete({_id: filter.id});
    if(!company){
        throw new Error("No company found!");
    }

    return company;
}