import React, { useEffect, useState } from 'react'
import { coursePageStyles, coursePageCustomStyles, toastStyles } from '../assets/dummyStyles'
import courses from '../assets/dummyData'
import { Search, Star, StarHalf, User, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const StarIcon = ({ filled = false, half = false, className = "" }) => {
    if (half) {
        return <StarHalf className={`w-4 h-4 ${className}`} fill="currentColor" />;
    }
    return (
        <Star className={`w-4 h-4 ${className}`} fill={filled ? "currentColor" : "none"} />
    );
};

const UserIcon = () => <User className={coursePageStyles.teacherIcon} />

const SearchIcon = () => <Search className={coursePageStyles.searchIcon} />

const CoursePage = () => {

    const navigate = useNavigate();

    const [ratings, setRatings] = useState(() => {
        try {
            const raw = localStorage.getItem("userCourseRatings");
            return raw ? JSON.parse(raw) : {};
        } catch {
            return {};
        }
    });

    const [searchQuery, setSearchQuery] = useState("");
    const [showAll, setShowAll] = useState(false);

    // persist rating when changed
    useEffect(() => {
        try {
            localStorage.setItem('userCourseRatings', JSON.stringify(ratings));
        } catch {
            // ignore
        }
    }, [ratings]);

    const handleRating = (courseId, newRating, e) => {
        if (e && e.stopPropagation) e.stopPropagation();
        setRatings((prev) => ({
            ...prev,
            [courseId]: newRating,
        }));
    }

    const filteredCourses = courses.filter(
        (course) =>
            course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Decide which courses to show (8 by default)
    const VISIBLE_COUNT = 8;
    const visibleCourses = showAll
        ? filteredCourses
        : filteredCourses.slice(0, VISIBLE_COUNT);
    const remainingCount = Math.max(0, filteredCourses.length - VISIBLE_COUNT);

    // Small, animated top-right toast — only shown when user clicks a course and token missing
    const showLoginToast = () => {
        toast.error("Please login to access this course", {
            position: "top-right",
            transition: Slide,
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
    };

    // navigate to course details if logged in else
        const openCourse = (courseId) => {
            const token = localStorage.getItem('token');
            if (!token) {
                showLoginToast();
                return;
            }
            navigate(`/courses/${courseId}`);
        };

        const isCourseFree = (course) => {
            return course.isFree || !course.price;
        }

    return (
        <div className={coursePageStyles.pageContainer}>
            <div className={coursePageStyles.headerContainer}>
                <div className={coursePageStyles.headerTransform}>
                    <h1 className={coursePageStyles.headerTitle}>Learn & Grow</h1>
                </div>
                <p className={coursePageStyles.headerSubtitle}>
                    Master New Skills with Expert-Led Courses
                </p>
                <div className={coursePageStyles.searchContainer}>
                    <div className={coursePageStyles.searchGradient} />
                    <div className={coursePageStyles.searchInputContainer}>
                        <div className={coursePageStyles.searchIconContainer}>
                            <SearchIcon />
                        </div>
                        <input
                            type="text"
                            placeholder='Search courses by name, instructor or category...'
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setShowAll(false);
                            }} className={coursePageStyles.searchInput} />

                        {searchQuery && (
                            <button onClick={() => {
                                setSearchQuery("");
                                setShowAll(false);
                            }} className={coursePageStyles.clearButton}>
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>

                {/* results count */}
                {searchQuery && (
                    <div className="text-center">
                        <p className={coursePageStyles.resultsCount}>
                            Found {filteredCourses.length}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CoursePage