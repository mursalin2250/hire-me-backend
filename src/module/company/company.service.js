import companyModel from "./company.model.js";

export const createCompanyService = async (data) => {

    const company = await companyModel.findOne({title: data.title});
    if(company){
        throw new Error("Company already Exists!");
    }
    const newCompany = await companyModel.create(data);
    return newCompany;
}

export const getCompanyService = async (id) => {
    const company = await companyModel.findOne({id}).select("-__v").populate("job");
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

export const updateCompanyService = async (id, data) => {
    const company = await companyModel.findOneAndUpdate({_id: id}, data, {new: true});
    if(!company) {
        throw new Error("No company found!")
    };

    return company;
}

export const deleteCompanyService = async (id, data) => {
    const company = await companyModel.findOneAndDelete({_id: id});
    if(!company){
        throw new Error("No company found!");
    }

    return company;
}