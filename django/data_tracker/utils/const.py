class CONST:
    PATH_TO_CSV = "data-tracker/api/data_tracker/utils/csv/"

    SUCCESS = "SUCCESS"
    FAIL = "FAIL"
    ROWS = ["company"] # ADD NEW in the list 


class MESSAGES:
    SQL_ERROR = "Please check your sql. make sure to start with ''' select * from df ...'''"
    SUCCESS_DATA_SAVED= "your favorite command has been saved!"
    FAIL_DATA_NOT_SAVED= "someting went wrong. please check your inputs"
    FAIL_DATA_NOT_FETCHED= "someting went wrong. please checkj your inputs"