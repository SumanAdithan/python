from sqlalchemy import create_engine; # to connect python and database
from sqlalchemy.orm import sessionmaker, declarative_base; # each session lets you talk to the database, declarative_base is base class for your orm models
from dotenv import load_dotenv;
import os;

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autoflush=False)
Base = declarative_base()