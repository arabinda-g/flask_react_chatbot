class Config(object):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://flask_crud:flask_crud@localhost/flask_crud'
    SQLALCHEMY_TRACK_MODIFICATIONS = False